import { http, passthrough } from 'msw';

/**
 * Get user by id
 *
 * HTTP: GET /api/rest/users/users/:id
 * Response type: User
 */
export const Users_getUserHandler = http.get(
    '*/api/rest/users/users/:id',

    () => {
        // TODO: Return a response of type User
        return passthrough();
    }
);
