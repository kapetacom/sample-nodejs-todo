//
// GENERATED SOURCE - DO NOT EDIT
//
import { RestClient } from '@kapeta/sdk-rest-client';
import { ConfigProvider } from '@kapeta/sdk-config';
import { RestClientRequest } from '@kapeta/sdk-rest';
import { User } from 'generated:entities/User';
import { getJWTToken } from '@kapeta/sdk-auth-jwt';

/**
 * Creates a new ready UsersClient.
 *
 * See https://github.com/kapetacom/sdk-nodejs-rest-client for more information.
 */
export async function createUsersClient(configProvider: ConfigProvider): Promise<UsersClient> {
    return new UsersClient(false).$withConfigProvider(configProvider);
}

/**
 * A client for the users API.
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

    protected $afterCreate(request: RestClientRequest): void {
        if (request.hasHeader('Authorization')) {
            // Do not overwrite existing authorization header
            return;
        }

        // Adds current JWT token to request if available
        const jwtToken = getJWTToken();
        if (jwtToken?.token) {
            request.withBearerToken(jwtToken.token);
        }
    }

    /**
     * Get users by id
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: GET /users/{id}
     */
    async getUserById(id: string): Promise<User | null> {
        const result = await this.$execute('GET', '/users/{id}', [
            { name: 'id', value: id, transport: 'PATH', typeName: 'string' },
        ]);

        if (result === null) {
            return null;
        }
        return result as User;
    }

    /**
     * Get users by id
     *
     * Creates a request that can be manipulated before sending it with the ```call()``` method.
     *
     * HTTP: GET /users/{id}
     */
    getUserByIdRequest(id: string): RestClientRequest<User | null> {
        return this.$create('GET', '/users/{id}', [{ name: 'id', value: id, transport: 'PATH', typeName: 'string' }]);
    }
}
