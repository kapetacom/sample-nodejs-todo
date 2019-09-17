const TABLE = 'users';
const PRIMARY_KEY = 'id';

class UsersRouteService {

    constructor() {
        this._userDB = require('../data/UsersDB');
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
        return this._userDB.insertRow(TABLE, user);
    }

    /**
     * Get user by id
     * HTTP: GET /users/{id}
     *
     * @param {String} id
     * @return {Promise<User>}
     */
    async getUser(id) {
        return this._userDB.findRowById(TABLE, id, PRIMARY_KEY)
    }

    /**
     * Delete user by id
     * HTTP: DELETE /users/{id}
     *
     * @param {String} id
     * @return {Promise<void>}
     */
    async deleteUser(id) {
        return this._userDB.deleteRowById(TABLE, id, PRIMARY_KEY);
    }
}

module.exports = UsersRouteService;
