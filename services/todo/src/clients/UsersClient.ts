//
// GENERATED SOURCE - DO NOT EDIT
//
import { RestClient } from "@kapeta/sdk-rest-client";
import { User } from "../entities/User";

export class UsersClient {
    private readonly client: RestClient;

    constructor() {
        this.client = new RestClient("users");
    }

    /**
     * Get users by id
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: GET /users/{id}
     */
    async getUserById(id: string): Promise<User | null> {
        const result = await this.client.execute("GET", "/users/{id}", [
            { name: "id", value: id, transport: "PATH" },
        ]);

        if (result.body === null) {
            return null;
        }
        return result.body as User;
    }
}
