//
// GENERATED SOURCE - DO NOT EDIT
//
const RestClient = require("@blockware/sdk-rest-client");

class UsersClient {
    constructor() {
        this._client = new RestClient("users");
    }

    /**
     * Get users by id
     * HTTP: GET /users/{id}
     *
     * @param {string} id
     * @return {Promise<User>}
     */
    getUserById(id) {
        return this._client.execute("GET", "/users/{id}", [
            { name: "id", value: id, transport: "PATH" },
        ]);
    }
}

module.exports = new UsersClient();
