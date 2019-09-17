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
     * @param {String} Id
     * @return {Promise<User>}
     */
    getUserById(Id) {
        return this._client.execute("GET", "/users/{id}", [
            { name: "id", value: Id, transport: "path" }
        ]);
    }
}

module.exports = new UsersClient();
