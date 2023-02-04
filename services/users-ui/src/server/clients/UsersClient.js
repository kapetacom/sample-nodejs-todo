//
// GENERATED SOURCE - DO NOT EDIT
//
const RestClient = require("@blockware/sdk-rest-client");

class UsersClient {
    constructor() {
        this._client = new RestClient("users");
    }

    /**
     * Register new user
     * HTTP: POST /register
     *
     * @param {UserRegistration} user
     * @return {Promise<void>}
     */
    registerUser(user) {
        return this._client.execute("POST", "/register", [
            { name: "user", value: user, transport: "BODY" },
        ]);
    }

    /**
     * Activate user registration
     * HTTP: POST /activate
     *
     * @param {UserActivation} user
     * @return {Promise<void>}
     */
    activateUser(user) {
        return this._client.execute("POST", "/activate", [
            { name: "user", value: user, transport: "BODY" },
        ]);
    }

    /**
     * Authenticate user
     * HTTP: POST /authenticate
     *
     * @param {UserAuthentication} user
     * @return {Promise<void>}
     */
    authenticationUser(user) {
        return this._client.execute("POST", "/authenticate", [
            { name: "user", value: user, transport: "BODY" },
        ]);
    }

    /**
     * Reset password for user
     * HTTP: POST /reset_password
     *
     * @param {string} email
     * @return {Promise<void>}
     */
    resetPassword(email) {
        return this._client.execute("POST", "/reset_password", [
            { name: "email", value: email, transport: "QUERY" },
        ]);
    }

    /**
     * Get user by id
     * HTTP: GET /users/{id}
     *
     * @param {string} id
     * @return {Promise<User>}
     */
    getUser(id) {
        return this._client.execute("GET", "/users/{id}", [
            { name: "id", value: id, transport: "PATH" },
        ]);
    }

    /**
     * Delete user by id
     * HTTP: DELETE /users/{id}
     *
     * @param {string} id
     * @param {string} filter
     * @return {Promise<void>}
     */
    deleteUser(id, filter) {
        return this._client.execute("DELETE", "/users/{id}", [
            { name: "id", value: id, transport: "PATH" },
            { name: "filter", value: filter, transport: "QUERY" },
        ]);
    }
}

module.exports = new UsersClient();
