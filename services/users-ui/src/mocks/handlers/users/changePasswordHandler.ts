import { http, HttpResponse } from "msw";

/**
 * Change password for user
 * HTTP: POST /api/rest/users/change_password
 * Response type: void
 */
export const changePasswordHandler = http.post(
    "*/api/rest/users/change_password",
    () => {
        return new HttpResponse(null, { status: 200 });
    }
);
