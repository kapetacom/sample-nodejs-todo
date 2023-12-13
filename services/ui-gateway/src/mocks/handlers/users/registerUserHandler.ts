import { http, HttpResponse } from "msw";

/**
 * Register new user
 * HTTP: POST /api/rest/users/register
 * Response type: void
 */
export const registerUserHandler = http.post(
    "*/api/rest/users/register",
    () => {
        return new HttpResponse(null, { status: 200 });
    }
);
