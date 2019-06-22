class UsersRouteService {

    constructor() {
        this._userDB = require('../data/UsersRepository');
    }

    /**
     * Create user
     * HTTP: POST /users/{id}
     *
     * @param {String} id
     * @param {User} user
     * @return {Promise<User>}
     */
    async createUser(id, user) {
        user.id = id;
        return this._userDB.insert(user);
    }

    /**
     * Get user by id
     * HTTP: GET /users/{id}
     *
     * @param {String} id
     * @return {Promise<User>}
     */
    async getUser(id) {
        return this._userDB.findById(id);
    }

    /**
     * Delete user by id
     * HTTP: DELETE /users/{id}
     *
     * @param {String} id
     * @return {Promise<void>}
     */
    async deleteUser(id) {
        return this._userDB.deleteById(id);
    }
}

module.exports = UsersRouteService;
