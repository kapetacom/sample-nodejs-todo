import { http, passthrough } from "msw";

/**
 * Authenticate user
 * HTTP: POST /api/rest/users/authenticate
 * Response type: UserSession
 */
export const authenticationUserHandler = http.post(
    "*/api/rest/users/authenticate",
    () => {
        // TODO: Return a response of type UserSession
        return passthrough();
    }
);
