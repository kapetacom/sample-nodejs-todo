//
// GENERATED SOURCE - DO NOT EDIT
//

import { RestClient } from "@kapeta/sdk-web-rest-client";
import { UserRegistration } from "../../entities/UserRegistration";
import { UserActivation } from "../../entities/UserActivation";
import { UserSession } from "../../entities/UserSession";
import { UserAuthentication } from "../../entities/UserAuthentication";
import { PasswordChangeRequest } from "../../entities/PasswordChangeRequest";
import { User } from "../../entities/User";

export class UsersClient {
    private client: RestClient;

    constructor() {
        this.client = new RestClient("api/rest/users");
    }

    /**
     * Register new user
     * HTTP: POST /api/rest/users/register
     */
    async registerUser(user: UserRegistration): Promise<void> {
        await this.client.execute("POST", "/register", [
            { name: "user", value: user, transport: "BODY" },
        ]);
    }

    /**
     * Activate user registration
     * HTTP: POST /api/rest/users/activate
     */
    async activateUser(user: UserActivation): Promise<void> {
        await this.client.execute("POST", "/activate", [
            { name: "user", value: user, transport: "BODY" },
        ]);
    }

    /**
     * Authenticate user
     * HTTP: POST /api/rest/users/authenticate
     */
    async authenticationUser(
        user: UserAuthentication
    ): Promise<UserSession | null> {
        const result = await this.client.execute("POST", "/authenticate", [
            { name: "user", value: user, transport: "BODY" },
        ]);

        if (result === null) {
            return null;
        }
        return result as UserSession;
    }

    /**
     * Reset password for user
     * HTTP: POST /api/rest/users/reset_password
     */
    async resetPassword(email: string): Promise<void> {
        await this.client.execute("POST", "/reset_password", [
            { name: "email", value: email, transport: "QUERY" },
        ]);
    }

    /**
     * Change password for user
     * HTTP: POST /api/rest/users/change_password
     */
    async changePassword(change: PasswordChangeRequest): Promise<void> {
        await this.client.execute("POST", "/change_password", [
            { name: "change", value: change, transport: "BODY" },
        ]);
    }

    /**
     * Get user by id
     * HTTP: GET /api/rest/users/users/{id}
     */
    async getUser(id: string): Promise<User | null> {
        const result = await this.client.execute("GET", "/users/{id}", [
            { name: "id", value: id, transport: "PATH" },
        ]);

        if (result === null) {
            return null;
        }
        return result as User;
    }
}
