//
// GENERATED SOURCE - DO NOT EDIT
//
import { RestClient } from '@kapeta/sdk-rest-client';
import { RestClientRequest } from '@kapeta/sdk-rest';
import { ConfigProvider } from '@kapeta/sdk-config';
import { UserRegistration } from '../../../.generated/entities/UserRegistration';
import { UserActivation } from '../../../.generated/entities/UserActivation';
import { UserSession } from '../../../.generated/entities/UserSession';
import { UserAuthentication } from '../../../.generated/entities/UserAuthentication';
import { PasswordChangeRequest } from '../../../.generated/entities/PasswordChangeRequest';
import { User } from '../../../.generated/entities/User';

/**
 * Creates a new ready UsersClient.
 *
 * See https://github.com/kapetacom/sdk-nodejs-rest-client for more information.
 */
export async function createUsersClient(configProvider: ConfigProvider): Promise<UsersClient> {
    return new UsersClient(false).$withConfigProvider(configProvider);
}

/**
 * A client for the Users API.
 *
 * Note that this client is not ready to use until it is configured with a ```ConfigProvider```.
 * This happens automatically when using the ```createUsersClient``` function or
 * setting ```autoInit``` to true (the default).
 *
 * If you want to configure the client manually, set autoInit to false and call ```$withConfigProvider```.
 *
 * Recommended method is using ```createUsersClient(configProvider:ConfigProvider)```;
 *
 * See https://github.com/kapetacom/sdk-nodejs-rest-client for more information.
 */
export class UsersClient extends RestClient {
    constructor(autoInit: boolean = true) {
        super('users', autoInit);
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
        await this.$execute('POST', '/register', [
            { name: 'user', value: user, transport: 'BODY', typeName: 'UserRegistration' },
        ]);
    }

    /**
     * Register new user
     *
     * Creates a request that can be manipulated before sending it with the ```call()``` method.
     *
     * HTTP: POST /register
     */
    registerUserRequest(user: UserRegistration): RestClientRequest<void> {
        return this.$create('POST', '/register', [
            { name: 'user', value: user, transport: 'BODY', typeName: 'UserRegistration' },
        ]);
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
        await this.$execute('POST', '/activate', [
            { name: 'user', value: user, transport: 'BODY', typeName: 'UserActivation' },
        ]);
    }

    /**
     * Activate user registration
     *
     * Creates a request that can be manipulated before sending it with the ```call()``` method.
     *
     * HTTP: POST /activate
     */
    activateUserRequest(user: UserActivation): RestClientRequest<void> {
        return this.$create('POST', '/activate', [
            { name: 'user', value: user, transport: 'BODY', typeName: 'UserActivation' },
        ]);
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
        const result = await this.$execute('POST', '/authenticate', [
            { name: 'user', value: user, transport: 'BODY', typeName: 'UserAuthentication' },
        ]);

        if (result === null) {
            return null;
        }
        return result as UserSession;
    }

    /**
     * Authenticate user
     *
     * Creates a request that can be manipulated before sending it with the ```call()``` method.
     *
     * HTTP: POST /authenticate
     */
    authenticationUserRequest(user: UserAuthentication): RestClientRequest<UserSession | null> {
        return this.$create('POST', '/authenticate', [
            { name: 'user', value: user, transport: 'BODY', typeName: 'UserAuthentication' },
        ]);
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
        await this.$execute('POST', '/reset_password', [
            { name: 'email', value: email, transport: 'QUERY', typeName: 'string' },
        ]);
    }

    /**
     * Reset password for user
     *
     * Creates a request that can be manipulated before sending it with the ```call()``` method.
     *
     * HTTP: POST /reset_password
     */
    resetPasswordRequest(email: string): RestClientRequest<void> {
        return this.$create('POST', '/reset_password', [
            { name: 'email', value: email, transport: 'QUERY', typeName: 'string' },
        ]);
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
        await this.$execute('POST', '/change_password', [
            { name: 'change', value: change, transport: 'BODY', typeName: 'PasswordChangeRequest' },
        ]);
    }

    /**
     * Change password for user
     *
     * Creates a request that can be manipulated before sending it with the ```call()``` method.
     *
     * HTTP: POST /change_password
     */
    changePasswordRequest(change: PasswordChangeRequest): RestClientRequest<void> {
        return this.$create('POST', '/change_password', [
            { name: 'change', value: change, transport: 'BODY', typeName: 'PasswordChangeRequest' },
        ]);
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
        const result = await this.$execute('GET', '/users/{id}', [
            { name: 'id', value: id, transport: 'PATH', typeName: 'string' },
        ]);

        if (result === null) {
            return null;
        }
        return result as User;
    }

    /**
     * Get user by id
     *
     * Creates a request that can be manipulated before sending it with the ```call()``` method.
     *
     * HTTP: GET /users/{id}
     */
    getUserRequest(id: string): RestClientRequest<User | null> {
        return this.$create('GET', '/users/{id}', [{ name: 'id', value: id, transport: 'PATH', typeName: 'string' }]);
    }
}
