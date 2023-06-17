//
// GENERATED SOURCE - DO NOT EDIT
//
import { RestClient } from "@kapeta/sdk-rest-client";
import { UserRegistration } from "../../entities/UserRegistration";
import { UserActivation } from "../../entities/UserActivation";
import { UserAuthentication } from "../../entities/UserAuthentication";
import { User } from "../../entities/User";

class UsersClient {
    private readonly client: RestClient;

    constructor() {
        this.client = new RestClient("users");
    }

    /**
     * Register new user
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: POST /register
     */
    async registerUser(user: UserRegistration): Promise<void> {
        await this.client.execute("POST", "/register", [
            { name: "user", value: user, transport: "BODY" },
        ]);
    }

    /**
     * Activate user registration
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: POST /activate
     */
    async activateUser(user: UserActivation): Promise<void> {
        await this.client.execute("POST", "/activate", [
            { name: "user", value: user, transport: "BODY" },
        ]);
    }

    /**
     * Authenticate user
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: POST /authenticate
     */
    async authenticationUser(user: UserAuthentication): Promise<void> {
        await this.client.execute("POST", "/authenticate", [
            { name: "user", value: user, transport: "BODY" },
        ]);
    }

    /**
     * Reset password for user
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: POST /reset_password
     */
    async resetPassword(email: string): Promise<void> {
        await this.client.execute("POST", "/reset_password", [
            { name: "email", value: email, transport: "QUERY" },
        ]);
    }

    /**
     * Get user by id
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: GET /users/{id}
     */
    async getUser(id: string): Promise<User | null> {
        const result = await this.client.execute("GET", "/users/{id}", [
            { name: "id", value: id, transport: "PATH" },
        ]);

        if (result.body === null) {
            return null;
        }
        return result.body as User;
    }
}

export default new UsersClient();
