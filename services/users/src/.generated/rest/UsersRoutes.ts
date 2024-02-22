//
// GENERATED SOURCE - DO NOT EDIT
//
import type { Request, Response } from 'express';
import { UserRegistration } from 'generated:entities/UserRegistration';
import { UserActivation } from 'generated:entities/UserActivation';
import { UserSession } from 'generated:entities/UserSession';
import { UserAuthentication } from 'generated:entities/UserAuthentication';
import { PasswordChangeRequest } from 'generated:entities/PasswordChangeRequest';
import { User } from 'generated:entities/User';

export type RegisterUserRequest<Locals extends Record<string, any> = Record<string, any>> = Request<
    void,
    void,
    UserRegistration,
    void,
    Locals
>;
export type RegisterUserResponse<Locals extends Record<string, any> = Record<string, any>> = Response<void, Locals>;

export type ActivateUserRequest<Locals extends Record<string, any> = Record<string, any>> = Request<
    void,
    void,
    UserActivation,
    void,
    Locals
>;
export type ActivateUserResponse<Locals extends Record<string, any> = Record<string, any>> = Response<void, Locals>;

export type AuthenticationUserRequest<Locals extends Record<string, any> = Record<string, any>> = Request<
    void,
    UserSession,
    UserAuthentication,
    void,
    Locals
>;
export type AuthenticationUserResponse<Locals extends Record<string, any> = Record<string, any>> = Response<
    UserSession,
    Locals
>;

export type ResetPasswordRequest<Locals extends Record<string, any> = Record<string, any>> = Request<
    void,
    void,
    void,
    { email: string },
    Locals
>;
export type ResetPasswordResponse<Locals extends Record<string, any> = Record<string, any>> = Response<void, Locals>;

export type ChangePasswordRequest<Locals extends Record<string, any> = Record<string, any>> = Request<
    void,
    void,
    PasswordChangeRequest,
    void,
    Locals
>;
export type ChangePasswordResponse<Locals extends Record<string, any> = Record<string, any>> = Response<void, Locals>;

export type GetUserRequest<Locals extends Record<string, any> = Record<string, any>> = Request<
    { id: string },
    User,
    void,
    void,
    Locals
>;
export type GetUserResponse<Locals extends Record<string, any> = Record<string, any>> = Response<User, Locals>;

/**
 * Defines the types for methods and routes of the Users API
 */
export interface UsersRoutes<Locals extends Record<string, any> = Record<string, any>> {
    /**
     * Register new user
     * HTTP: POST /register
     */
    registerUser(req: RegisterUserRequest<Locals>, res: RegisterUserResponse<Locals>): void | Promise<void>;

    /**
     * Activate user registration
     * HTTP: POST /activate
     */
    activateUser(req: ActivateUserRequest<Locals>, res: ActivateUserResponse<Locals>): void | Promise<void>;

    /**
     * Authenticate user
     * HTTP: POST /authenticate
     */
    authenticationUser(
        req: AuthenticationUserRequest<Locals>,
        res: AuthenticationUserResponse<Locals>
    ): void | Promise<void>;

    /**
     * Reset password for user
     * HTTP: POST /reset_password
     */
    resetPassword(req: ResetPasswordRequest<Locals>, res: ResetPasswordResponse<Locals>): void | Promise<void>;

    /**
     * Change password for user
     * HTTP: POST /change_password
     */
    changePassword(req: ChangePasswordRequest<Locals>, res: ChangePasswordResponse<Locals>): void | Promise<void>;

    /**
     * Get user by id
     * HTTP: GET /users/:id
     */
    getUser(req: GetUserRequest<Locals>, res: GetUserResponse<Locals>): void | Promise<void>;
}
