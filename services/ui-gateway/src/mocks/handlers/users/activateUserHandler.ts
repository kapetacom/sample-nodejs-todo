import { http, HttpResponse } from 'msw';

/**
 * Activate user registration
 *
 * HTTP: POST /api/rest/users/activate
 * Response type: void
 */
export const Users_activateUserHandler = http.post(
    '*/api/rest/users/activate',

    () => {
        return new HttpResponse(null, { status: 200 });
    }
);
