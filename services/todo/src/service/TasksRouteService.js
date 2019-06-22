class TasksRouteService {

    constructor() {
        this._todoDB = require('../data/TodoRepository');
        this._users = require('../clients/UsersClient');
    }

    /**
     * Add task for user
     * HTTP: POST /tasks/{userId}/{id}
     *
     * @param {String} userId
     * @param {String} id
     * @param {Task} task
     * @return {Promise<void>}
     */
    async addTask(userId, id, task) {

        const user = await this._users.getUserById(userId);
        if (!user) {
            throw new Error('User not found - ' + userId);
        }

        task.id = id;
        task.userId = userId;
        await this._todoDB.insert(task);
    }
}

module.exports = TasksRouteService;
