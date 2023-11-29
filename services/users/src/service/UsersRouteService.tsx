/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import { Request, Response } from 'express';
import React from 'react';
import crypto from 'node:crypto';

import md5 from 'md5';
import Config from '@kapeta/sdk-config';

import { EmailService } from './EmailService';
import { ActivationEmail } from '../emails/ActivationEmail';
import { RegistrationEmail } from '../emails/RegistrationEmail';
import { ResetPasswordEmail } from '../emails/PasswordReset';
import { UsersDB } from 'generated:data/UsersDB';
import { UserActivation } from 'generated:entities/UserActivation';
import { UserAuthentication } from 'generated:entities/UserAuthentication';
import { UserSession } from 'generated:entities/UserSession';
import { User } from 'generated:entities/User';
import { PasswordChangeRequest } from 'generated:entities/PasswordChangeRequest';
import { UserRegistration } from 'generated:entities/UserRegistration';
import { UsersRoutes } from 'generated:rest/UsersRoutes';
import {getWebConfigConfig, WebConfigConfig} from "generated:config/WebConfigConfig";

function toPassword(seed: string, pw: string) {
    return seed + ':' + md5(seed + pw);
}

export class UsersRouteService implements UsersRoutes {
    private readonly _db: UsersDB;
    private readonly _email: EmailService;
    private readonly _webConfig: WebConfigConfig;

    constructor() {
        this._db = new UsersDB();
        this._email = new EmailService();
        this._webConfig = getWebConfigConfig({
            instance: {id: ''},
            activationPath: '',
            basePath: '',
        });
    }

    get db() {
        return this._db.client!;
    }
    /**
     * Register new user
     * HTTP: POST /register
     */
    async registerUser(req: Request<void, void, UserRegistration, void>, res: Response) {
        if (req.auth) {
            res.sendError('Already authenticated', 400);
            return;
        }

        const user = req.body;

        const registration = {
            id: crypto.randomUUID(),
            ...user,
        };

        let gatewayHost = await Config.getAsInstanceHost('WebConfig.instance');
        if (!gatewayHost) {
            res.sendError('Internal error - Failed to get instance host.', 500);
            return;
        }

        if (gatewayHost.endsWith('/')) {
            gatewayHost = gatewayHost.substring(0, gatewayHost.length - 1);
        }


        let activationPath = this._webConfig.activationPath;
        if (activationPath && activationPath !== '/') {
            if (!activationPath.startsWith('/')) {
                activationPath = '/' + activationPath;
            }

            if (activationPath.endsWith('/')) {
                activationPath = activationPath.substring(0, activationPath.length - 1);
            }
        }

        if (activationPath === '/') {
            activationPath = '';
        }

        const url = `${gatewayHost}${activationPath}/${registration.id}`;

        await this.db.userRegistrations.create({
            data: registration,
        });

        await this._email.sendReact({
            to: user.email,
            subject: 'Activate your account',
            body: <ActivationEmail name={user.name} url={url} />,
        });

        res.status(201).end();
    }

    /**
     * Activate user registration
     * HTTP: POST /activate
     */
    async activateUser(req: Request<void, void, UserActivation, void>, res: Response) {
        if (req.auth) {
            res.sendError('Already authenticated', 400);
            return;
        }
        if (!req.body.password) {
            res.sendError('Password is required', 400);
            return;
        }

        if (req.body.password !== req.body.password2) {
            res.sendError('Passwords did not match', 400);
            return;
        }

        const userRegistration = await this.db.userRegistrations.findUnique({
            where: {
                id: req.body.id,
            },
        });

        if (!userRegistration) {
            res.sendError('User registration not found', 400);
            return;
        }

        const seed = crypto.randomUUID();
        /**
         *
         * @type {User}
         */
        const user = {
            id: crypto.randomUUID(),
            email: userRegistration.email,
            name: userRegistration.name,
            password: toPassword(seed, req.body.password),
        };

        await this.db.users.create({
            data: user,
        });

        await this._email.sendReact({
            to: user.email,
            subject: 'Welcome!',
            body: <RegistrationEmail name={user.name ?? user.email} />,
        });

        res.status(201).end();
    }

    /**
     * Authenticate user
     * HTTP: POST /authenticate
     */
    async authenticationUser(
        req: Request<void, UserSession, UserAuthentication, void>,
        res: Response<UserSession>
    ): Promise<void> {
        if (req.auth) {
            res.sendError('Already authenticated', 400);
            return;
        }

        if (!req.authHandler) {
            res.sendError('Internal error - Missing auth handler', 500);
            return;
        }

        const authHandler = req.authHandler;

        const user = await this.db.users.findUnique({
            where: {
                email: req.body.email,
            },
        });

        if (!user) {
            res.sendError('User not found', 404);
            return;
        }

        const [seed] = user.password.split(':');

        if (user.password !== toPassword(seed, req.body.password)) {
            res.sendError('Invalid password', 401);
            return;
        }

        const result = await this.db.userSessions.create({
            data: {
                userId: user.id,
            },
        });

        const token = await authHandler.createToken(
            {
                jti: result.id,
                sub: user.id,
                name: user.name,
                email: user.email,
            },
            {
                expiresIn: '1h',
            }
        );

        res.json({
            token,
        });
    }

    /**
     * Reset password for user
     * HTTP: POST /reset_password
     */
    async resetPassword(req: Request<void, void, void, { email: string }>, res: Response) {
        if (req.auth) {
            res.sendError('Already authenticated', 400);
            return;
        }

        const user = await this.db.users.findUnique({
            where: {
                email: req.query.email,
            },
        });
        if (!user) {
            res.sendError('User not found', 404);
            return;
        }
        const seed = crypto.randomUUID();
        const newPw = crypto.randomUUID().replace(/-/g, '');

        await this.db?.users.update({
            where: {
                id: user.id,
            },
            data: {
                password: toPassword(seed, newPw),
            },
        });

        await this._email.sendReact({
            to: user.email,
            subject: 'Welcome!',
            body: <ResetPasswordEmail newPassword={newPw} />,
        });

        res.status(201).end();
    }

    async getUser(req: Request<{ id: string }, User, void, void>, res: Response<User>) {
        if (!req.auth) {
            res.sendError('Authentication required to access user', 401);
            return;
        }

        if (req.auth.payload.sub !== req.params.id) {
            res.sendError('Authentication does not match user', 403);
            return;
        }

        const user = await this.db.users.findUnique({
            where: {
                id: req.params.id,
            },
        });

        if (!user) {
            res.sendError('User not found', 404);
            return;
        }

        res.json({
            id: user.id,
            email: user.email,
            name: user.name || user.email,
        });
    }

    async changePassword(req: Request<void, void, PasswordChangeRequest, void>, res: Response): Promise<void> {
        if (req.auth?.payload.sub !== req.body.id) {
            res.sendError('Not authorized', 403);
            return;
        }

        const user = await this.db.users.findUnique({
            where: {
                id: req.body.id,
            },
        });

        if (!user) {
            res.sendError('User not found', 404);
            return;
        }

        if (req.body.password !== req.body.password2) {
            res.sendError('Passwords did not match', 400);
            return;
        }

        let [seed] = user.password.split(':');
        if (user.password !== toPassword(seed, req.body.oldPassword)) {
            res.sendError('Invalid password', 401);
            return;
        }

        seed = crypto.randomUUID();
        const newPw = req.body.password;

        await this.db?.users.update({
            where: {
                id: user.id,
            },
            data: {
                password: toPassword(seed, newPw),
            },
        });

        res.status(201).end();
    }
}
