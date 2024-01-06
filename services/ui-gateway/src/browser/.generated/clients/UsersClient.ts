//
// GENERATED SOURCE - DO NOT EDIT
//

import { RestClient, RestClientRequest } from '@kapeta/sdk-web-rest-client';
import { UserRegistration } from '../../../.generated/entities/UserRegistration';
import { UserActivation } from '../../../.generated/entities/UserActivation';
import { UserSession } from '../../../.generated/entities/UserSession';
import { UserAuthentication } from '../../../.generated/entities/UserAuthentication';
import { User } from '../../../.generated/entities/User';

export class UsersClient extends RestClient {
    constructor() {
        super('api/rest/users');
    }

    /**
     * Register new user
     * HTTP: POST /api/rest/users/register
     */
    async registerUser(user: UserRegistration): Promise<void> {
        await this.$execute<void>('POST', '/register', [{ name: 'user', value: user, transport: 'BODY' }]);
    }

    /**
     * Register new user
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: POST /api/rest/users/register
     */
    registerUserRequest(user: UserRegistration): RestClientRequest<void> {
        return this.$create<void>('POST', '/register', [{ name: 'user', value: user, transport: 'BODY' }]);
    }

    /**
     * Activate user registration
     * HTTP: POST /api/rest/users/activate
     */
    async activateUser(user: UserActivation): Promise<void> {
        await this.$execute<void>('POST', '/activate', [{ name: 'user', value: user, transport: 'BODY' }]);
    }

    /**
     * Activate user registration
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: POST /api/rest/users/activate
     */
    activateUserRequest(user: UserActivation): RestClientRequest<void> {
        return this.$create<void>('POST', '/activate', [{ name: 'user', value: user, transport: 'BODY' }]);
    }

    /**
     * Authenticate user
     * HTTP: POST /api/rest/users/authenticate
     */
    async authenticationUser(user: UserAuthentication): Promise<UserSession | null> {
        const result = await this.$execute<UserSession>('POST', '/authenticate', [
            { name: 'user', value: user, transport: 'BODY' },
        ]);

        if (result === null) {
            return null;
        }
        return result as UserSession;
    }

    /**
     * Authenticate user
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: POST /api/rest/users/authenticate
     */
    authenticationUserRequest(user: UserAuthentication): RestClientRequest<UserSession | null> {
        return this.$create<UserSession>('POST', '/authenticate', [{ name: 'user', value: user, transport: 'BODY' }]);
    }

    /**
     * Reset password for user
     * HTTP: POST /api/rest/users/reset_password
     */
    async resetPassword(email: string): Promise<void> {
        await this.$execute<void>('POST', '/reset_password', [{ name: 'email', value: email, transport: 'QUERY' }]);
    }

    /**
     * Reset password for user
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: POST /api/rest/users/reset_password
     */
    resetPasswordRequest(email: string): RestClientRequest<void> {
        return this.$create<void>('POST', '/reset_password', [{ name: 'email', value: email, transport: 'QUERY' }]);
    }

    /**
     * Get user by id
     * HTTP: GET /api/rest/users/users/{id}
     */
    async getUser(id: string): Promise<User | null> {
        const result = await this.$execute<User>('GET', '/users/{id}', [{ name: 'id', value: id, transport: 'PATH' }]);

        if (result === null) {
            return null;
        }
        return result as User;
    }

    /**
     * Get user by id
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: GET /api/rest/users/users/{id}
     */
    getUserRequest(id: string): RestClientRequest<User | null> {
        return this.$create<User>('GET', '/users/{id}', [{ name: 'id', value: id, transport: 'PATH' }]);
    }
}
