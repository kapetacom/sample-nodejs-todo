//
// GENERATED SOURCE - DO NOT EDIT
//

import { RestClient } from "@kapeta/sdk-web-rest-client";
import { UserRegistration } from "../../entities/UserRegistration";
import { UserActivation } from "../../entities/UserActivation";
import { UserAuthentication } from "../../entities/UserAuthentication";
import { User } from "../../entities/User";

export class UsersClient {
    client: RestClient;

    constructor() {
        this.client = new RestClient("/api/");
    }

    /**
     * Register new user
     * HTTP: POST /api/register
     */
    registerUser(user: UserRegistration): Promise<void> {
        return this.client.execute("POST", "/register", [
            { name: "user", value: user, transport: "BODY" },
        ]);
    }

    /**
     * Activate user registration
     * HTTP: POST /api/activate
     */
    activateUser(user: UserActivation): Promise<void> {
        return this.client.execute("POST", "/activate", [
            { name: "user", value: user, transport: "BODY" },
        ]);
    }

    /**
     * Authenticate user
     * HTTP: POST /api/authenticate
     */
    authenticationUser(user: UserAuthentication): Promise<void> {
        return this.client.execute("POST", "/authenticate", [
            { name: "user", value: user, transport: "BODY" },
        ]);
    }

    /**
     * Reset password for user
     * HTTP: POST /api/reset_password
     */
    resetPassword(email: string): Promise<void> {
        return this.client.execute("POST", "/reset_password", [
            { name: "email", value: email, transport: "QUERY" },
        ]);
    }

    /**
     * Get user by id
     * HTTP: GET /api/users/{id}
     */
    getUser(id: string): Promise<User> {
        return this.client.execute("GET", "/users/{id}", [
            { name: "id", value: id, transport: "PATH" },
        ]);
    }
}
