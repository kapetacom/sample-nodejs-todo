import { http, HttpResponse } from 'msw';

/**
 * Reset password for user
 * HTTP: POST /api/rest/users/reset_password
 * Response type: void
 */
export const resetPasswordHandler = http.post('*/api/rest/users/reset_password', () => {
    return new HttpResponse(null, { status: 200 });
});
