//
// GENERATED SOURCE - DO NOT EDIT
//

import RESTClient from "@blockware/sdk-web-rest-client";
import { UserRegistration } from "../entities/UserRegistration";
import { UserActivation } from "../entities/UserActivation";
import { UserAuthentication } from "../entities/UserAuthentication";
import { User } from "../entities/User";

export class UsersClient {
    client: RESTClient;

    constructor() {
        this.client = new RESTClient("/api/");
    }

    /**
     * Register new user
     * HTTP: POST /api/register
     *
     * @param {UserRegistration} user
     * @return {Promise<void>}
     */
    registerUser(user: UserRegistration): Promise<void> {
        return this.client.execute("POST", "/register", [
            { name: "user", value: user, transport: "BODY" },
        ]);
    }

    /**
     * Activate user registration
     * HTTP: POST /api/activate
     *
     * @param {UserActivation} user
     * @return {Promise<void>}
     */
    activateUser(user: UserActivation): Promise<void> {
        return this.client.execute("POST", "/activate", [
            { name: "user", value: user, transport: "BODY" },
        ]);
    }

    /**
     * Authenticate user
     * HTTP: POST /api/authenticate
     *
     * @param {UserAuthentication} user
     * @return {Promise<void>}
     */
    authenticationUser(user: UserAuthentication): Promise<void> {
        return this.client.execute("POST", "/authenticate", [
            { name: "user", value: user, transport: "BODY" },
        ]);
    }

    /**
     * Reset password for user
     * HTTP: POST /api/reset_password
     *
     * @param {string} email
     * @return {Promise<void>}
     */
    resetPassword(email: string): Promise<void> {
        return this.client.execute("POST", "/reset_password", [
            { name: "email", value: email, transport: "QUERY" },
        ]);
    }

    /**
     * Get user by id
     * HTTP: GET /api/users/{id}
     *
     * @param {string} id
     * @return {Promise<User>}
     */
    getUser(id: string): Promise<User> {
        return this.client.execute("GET", "/users/{id}", [
            { name: "id", value: id, transport: "PATH" },
        ]);
    }

    /**
     * Delete user by id
     * HTTP: DELETE /api/users/{id}
     *
     * @param {string} id
     * @param {string} filter
     * @return {Promise<void>}
     */
    deleteUser(id: string, filter: string): Promise<void> {
        return this.client.execute("DELETE", "/users/{id}", [
            { name: "id", value: id, transport: "PATH" },
            { name: "filter", value: filter, transport: "QUERY" },
        ]);
    }
}
