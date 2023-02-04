class UsersRouteService {
    /**
     * Register new user
     * HTTP: POST /register
     *
     * @param {UserRegistration} user
     * @return {Promise<void>}
     */
    async registerUser(user) {
        throw new Error('REST resource method not implemented: "registerUser"');
    }

    /**
     * Activate user registration
     * HTTP: POST /activate
     *
     * @param {UserActivation} user
     * @return {Promise<void>}
     */
    async activateUser(user) {
        throw new Error('REST resource method not implemented: "activateUser"');
    }

    /**
     * Authenticate user
     * HTTP: POST /authenticate
     *
     * @param {UserAuthentication} user
     * @return {Promise<void>}
     */
    async authenticationUser(user) {
        throw new Error(
            'REST resource method not implemented: "authenticationUser"'
        );
    }

    /**
     * Reset password for user
     * HTTP: POST /reset_password
     *
     * @param {string} email
     * @return {Promise<void>}
     */
    async resetPassword(email) {
        throw new Error(
            'REST resource method not implemented: "resetPassword"'
        );
    }

    /**
     * Get user by id
     * HTTP: GET /users/{id}
     *
     * @param {string} id
     * @return {Promise<User>}
     */
    async getUser(id) {
        throw new Error('REST resource method not implemented: "getUser"');
    }

    /**
     * Delete user by id
     * HTTP: DELETE /users/{id}
     *
     * @param {string} id
     * @param {string} filter
     * @return {Promise<void>}
     */
    async deleteUser(id, filter) {
        throw new Error('REST resource method not implemented: "deleteUser"');
    }
}

module.exports = UsersRouteService;
