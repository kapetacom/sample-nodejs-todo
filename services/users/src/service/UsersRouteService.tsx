import React from 'react';
import crypto from 'node:crypto';
import md5 from 'md5';
import Config from '@kapeta/sdk-config';
import { EmailService } from './EmailService';
import { UsersDB } from '../data/UsersDB';
import { UserRegistration } from '../entities/UserRegistration';
import { UserActivation } from '../entities/UserActivation';
import { UserAuthentication } from '../entities/UserAuthentication';
import { ActivationEmail } from '../emails/ActivationEmail';
import { RegistrationEmail } from '../emails/RegistrationEmail';
import { ResetPasswordEmail } from '../emails/PasswordReset';
import { RESTError } from '@kapeta/sdk-rest-route';
import { IUsersRouteService } from '../rest/IUsersRouteService';
import { User } from '../entities/User';

function toPassword(seed: string, pw: string) {
    return seed + ':' + md5(seed + pw);
}

export class UsersRouteService implements IUsersRouteService {
    private readonly _db: UsersDB;
    private readonly _email: EmailService;

    constructor() {
        this._db = new UsersDB();

        this._email = new EmailService();
    }

    get db() {
        return this._db.client!;
    }
    /**
     * Register new user
     * HTTP: POST /register
     */
    async registerUser(user: UserRegistration) {
        const registration = {
            id: crypto.randomUUID(),
            ...user,
        };

        await this.db.userRegistrations.create({
            data: registration,
        });

        const gatewayHost = Config.getAsInstanceHost('WebConfig.instance');
        const activationPath = Config.get('WebConfig.activationPath');
        const url = `${gatewayHost}${activationPath}/${registration.id}`;

        await this._email.sendReact({
            to: user.email,
            subject: 'Activate your account',
            body: <ActivationEmail name={user.name} url={url} />,
        });
    }

    /**
     * Activate user registration
     * HTTP: POST /activate
     */
    async activateUser(activation: UserActivation) {
        if (!activation.password) {
            throw new RESTError('Password is required', 400);
        }

        if (activation.password !== activation.password2) {
            throw new RESTError('Passwords did not match', 400);
        }

        const userRegistration = await this.db.userRegistrations.findUnique({
            where: {
                id: activation.id,
            },
        });
        if (!userRegistration) {
            throw new RESTError('User registration not found', 404);
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
            password: toPassword(seed, activation.password),
        };

        await this.db.users.create({
            data: user,
        });

        await this._email.sendReact({
            to: user.email,
            subject: 'Welcome!',
            body: <RegistrationEmail name={user.name ?? user.email} />,
        });
    }

    /**
     * Authenticate user
     * HTTP: POST /authenticate
     */
    async authenticationUser(auth: UserAuthentication) {
        const user = await this.db.users.findUnique({
            where: {
                email: auth.email,
            },
        });

        if (!user) {
            throw new RESTError('User not found', 404);
        }

        const [seed] = user.password.split(':');

        if (user.password !== toPassword(seed, auth.password)) {
            throw new RESTError('Invalid password', 401);
        }
    }

    /**
     * Reset password for user
     * HTTP: POST /reset_password
     */
    async resetPassword(email: string) {
        const user = await this.db.users.findUnique({
            where: {
                email,
            },
        });
        if (!user) {
            throw new RESTError('User not found', 404);
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
    }

    /**
     * Get user by id
     * HTTP: GET /users/{id}
     */
    async getUser(id: string) {
        const user = await this.db.users.findUnique({
            where: {
                id,
            },
        });

        if (!user) {
            throw new RESTError('User not found', 404);
        }

        return {
            id: user.id,
            email: user.email,
            name: user.name || user.email,
        };
    }
}
