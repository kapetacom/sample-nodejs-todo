//
// GENERATED SOURCE - DO NOT EDIT
//
import type { RequestHandler } from 'express';
import { UserRegistration } from 'generated:entities/UserRegistration';
import { UserActivation } from 'generated:entities/UserActivation';
import { UserSession } from 'generated:entities/UserSession';
import { UserAuthentication } from 'generated:entities/UserAuthentication';
import { PasswordChangeRequest } from 'generated:entities/PasswordChangeRequest';
import { User } from 'generated:entities/User';

export interface UsersRoutes<Locals extends Record<string, any> = Record<string, any>> {
    /**
     * Register new user
     * HTTP: POST /register
     */
    registerUser: RequestHandler<void, void, UserRegistration, void, Locals>;

    /**
     * Activate user registration
     * HTTP: POST /activate
     */
    activateUser: RequestHandler<void, void, UserActivation, void, Locals>;

    /**
     * Authenticate user
     * HTTP: POST /authenticate
     */
    authenticationUser: RequestHandler<void, UserSession, UserAuthentication, void, Locals>;

    /**
     * Reset password for user
     * HTTP: POST /reset_password
     */
    resetPassword: RequestHandler<void, void, void, { email: string }, Locals>;

    /**
     * Change password for user
     * HTTP: POST /change_password
     */
    changePassword: RequestHandler<void, void, PasswordChangeRequest, void, Locals>;

    /**
     * Get user by id
     * HTTP: GET /users/:id
     */
    getUser: RequestHandler<{ id: string }, User, void, void, Locals>;
}
