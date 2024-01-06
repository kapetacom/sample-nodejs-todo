//
// GENERATED SOURCE - DO NOT EDIT
//
import { RestClient, RestClientRequest } from '@kapeta/sdk-rest-client';
import { UserRegistration } from '../../../.generated/entities/UserRegistration';
import { UserActivation } from '../../../.generated/entities/UserActivation';
import { UserSession } from '../../../.generated/entities/UserSession';
import { UserAuthentication } from '../../../.generated/entities/UserAuthentication';
import { PasswordChangeRequest } from '../../../.generated/entities/PasswordChangeRequest';
import { User } from '../../../.generated/entities/User';

export class UsersClient extends RestClient {
    constructor() {
        super('users');
    }

    /**
     * Register new user
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: POST /register
     */
    async registerUser(user: UserRegistration): Promise<void> {
        await this.$execute('POST', '/register', [{ name: 'user', value: user, transport: 'BODY' }]);
    }

    /**
     * Register new user
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: POST /register
     */
    registerUserRequest(user: UserRegistration): RestClientRequest<void> {
        return this.$create('POST', '/register', [{ name: 'user', value: user, transport: 'BODY' }]);
    }

    /**
     * Activate user registration
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: POST /activate
     */
    async activateUser(user: UserActivation): Promise<void> {
        await this.$execute('POST', '/activate', [{ name: 'user', value: user, transport: 'BODY' }]);
    }

    /**
     * Activate user registration
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: POST /activate
     */
    activateUserRequest(user: UserActivation): RestClientRequest<void> {
        return this.$create('POST', '/activate', [{ name: 'user', value: user, transport: 'BODY' }]);
    }

    /**
     * Authenticate user
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: POST /authenticate
     */
    async authenticationUser(user: UserAuthentication): Promise<UserSession | null> {
        const result = await this.$execute('POST', '/authenticate', [{ name: 'user', value: user, transport: 'BODY' }]);

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
     * HTTP: POST /authenticate
     */
    authenticationUserRequest(user: UserAuthentication): RestClientRequest<UserSession | null> {
        return this.$create('POST', '/authenticate', [{ name: 'user', value: user, transport: 'BODY' }]);
    }

    /**
     * Reset password for user
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: POST /reset_password
     */
    async resetPassword(email: string): Promise<void> {
        await this.$execute('POST', '/reset_password', [{ name: 'email', value: email, transport: 'QUERY' }]);
    }

    /**
     * Reset password for user
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: POST /reset_password
     */
    resetPasswordRequest(email: string): RestClientRequest<void> {
        return this.$create('POST', '/reset_password', [{ name: 'email', value: email, transport: 'QUERY' }]);
    }

    /**
     * Change password for user
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: POST /change_password
     */
    async changePassword(change: PasswordChangeRequest): Promise<void> {
        await this.$execute('POST', '/change_password', [{ name: 'change', value: change, transport: 'BODY' }]);
    }

    /**
     * Change password for user
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: POST /change_password
     */
    changePasswordRequest(change: PasswordChangeRequest): RestClientRequest<void> {
        return this.$create('POST', '/change_password', [{ name: 'change', value: change, transport: 'BODY' }]);
    }

    /**
     * Get user by id
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: GET /users/{id}
     */
    async getUser(id: string): Promise<User | null> {
        const result = await this.$execute('GET', '/users/{id}', [{ name: 'id', value: id, transport: 'PATH' }]);

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
     * HTTP: GET /users/{id}
     */
    getUserRequest(id: string): RestClientRequest<User | null> {
        return this.$create('GET', '/users/{id}', [{ name: 'id', value: id, transport: 'PATH' }]);
    }
}
