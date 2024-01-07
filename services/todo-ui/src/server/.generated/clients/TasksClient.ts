//
// GENERATED SOURCE - DO NOT EDIT
//
import { RestClient, RestClientRequest } from '@kapeta/sdk-rest-client';
import { ConfigProvider } from '@kapeta/sdk-config';
import { Task } from '../../../.generated/entities/Task';

/**
 * Creates a new ready TasksClient.
 *
 * See https://github.com/kapetacom/sdk-nodejs-rest-client for more information.
 */
export async function createTasksClient(configProvider: ConfigProvider): Promise<TasksClient> {
    return new TasksClient(false).$withConfigProvider(configProvider);
}

/**
 * A client for the tasks API.
 *
 * Note that this client is not ready to use until it is configured with a ```ConfigProvider```.
 * This happens automatically when using the ```createTasksClient``` function or
 * setting ```autoInit``` to true (the default).
 *
 * If you want to configure the client manually, set autoInit to false and call ```$withConfigProvider```.
 *
 * Recommended method is using ```createTasksClient(configProvider:ConfigProvider)```;
 *
 * See https://github.com/kapetacom/sdk-nodejs-rest-client for more information.
 */
export class TasksClient extends RestClient {
    constructor(autoInit: boolean = true) {
        super('tasks', autoInit);
    }

    /**
     * Get all tasks for user
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: GET /tasks/{userId}
     */
    async getTasks(userId: string): Promise<Task[] | null> {
        const result = await this.$execute('GET', '/tasks/{userId}', [
            { name: 'userId', value: userId, transport: 'PATH' },
        ]);

        if (result === null) {
            return null;
        }
        return result as Task[];
    }

    /**
     * Get all tasks for user
     *
     * Creates a request that can be manipulated before sending it with the ```call()``` method.
     *
     * HTTP: GET /tasks/{userId}
     */
    getTasksRequest(userId: string): RestClientRequest<Task[] | null> {
        return this.$create('GET', '/tasks/{userId}', [{ name: 'userId', value: userId, transport: 'PATH' }]);
    }

    /**
     * Add task for user
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: POST /tasks/{userId}/{id}
     */
    async addTask(userId: string, id: string, task: Task): Promise<void> {
        await this.$execute('POST', '/tasks/{userId}/{id}', [
            { name: 'userId', value: userId, transport: 'PATH' },
            { name: 'id', value: id, transport: 'PATH' },
            { name: 'task', value: task, transport: 'BODY' },
        ]);
    }

    /**
     * Add task for user
     *
     * Creates a request that can be manipulated before sending it with the ```call()``` method.
     *
     * HTTP: POST /tasks/{userId}/{id}
     */
    addTaskRequest(userId: string, id: string, task: Task): RestClientRequest<void> {
        return this.$create('POST', '/tasks/{userId}/{id}', [
            { name: 'userId', value: userId, transport: 'PATH' },
            { name: 'id', value: id, transport: 'PATH' },
            { name: 'task', value: task, transport: 'BODY' },
        ]);
    }

    /**
     * Mark task as done
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: POST /tasks/{userId}/{id}/done
     */
    async markAsDone(userId: string, id: string): Promise<void> {
        await this.$execute('POST', '/tasks/{userId}/{id}/done', [
            { name: 'userId', value: userId, transport: 'PATH' },
            { name: 'id', value: id, transport: 'PATH' },
        ]);
    }

    /**
     * Mark task as done
     *
     * Creates a request that can be manipulated before sending it with the ```call()``` method.
     *
     * HTTP: POST /tasks/{userId}/{id}/done
     */
    markAsDoneRequest(userId: string, id: string): RestClientRequest<void> {
        return this.$create('POST', '/tasks/{userId}/{id}/done', [
            { name: 'userId', value: userId, transport: 'PATH' },
            { name: 'id', value: id, transport: 'PATH' },
        ]);
    }

    /**
     * Mark task as undone
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: POST /tasks/{userId}/{id}/undone
     */
    async markAsUndone(userId: string, id: string): Promise<void> {
        await this.$execute('POST', '/tasks/{userId}/{id}/undone', [
            { name: 'userId', value: userId, transport: 'PATH' },
            { name: 'id', value: id, transport: 'PATH' },
        ]);
    }

    /**
     * Mark task as undone
     *
     * Creates a request that can be manipulated before sending it with the ```call()``` method.
     *
     * HTTP: POST /tasks/{userId}/{id}/undone
     */
    markAsUndoneRequest(userId: string, id: string): RestClientRequest<void> {
        return this.$create('POST', '/tasks/{userId}/{id}/undone', [
            { name: 'userId', value: userId, transport: 'PATH' },
            { name: 'id', value: id, transport: 'PATH' },
        ]);
    }

    /**
     * Delete task
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: DELETE /tasks/{userId}/{id}
     */
    async removeTask(userId: string, id: string): Promise<void> {
        await this.$execute('DELETE', '/tasks/{userId}/{id}', [
            { name: 'userId', value: userId, transport: 'PATH' },
            { name: 'id', value: id, transport: 'PATH' },
        ]);
    }

    /**
     * Delete task
     *
     * Creates a request that can be manipulated before sending it with the ```call()``` method.
     *
     * HTTP: DELETE /tasks/{userId}/{id}
     */
    removeTaskRequest(userId: string, id: string): RestClientRequest<void> {
        return this.$create('DELETE', '/tasks/{userId}/{id}', [
            { name: 'userId', value: userId, transport: 'PATH' },
            { name: 'id', value: id, transport: 'PATH' },
        ]);
    }

    /**
     * Delete all tasks for user
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: DELETE /tasks/{userId}
     */
    async removeTasks(userId: string): Promise<void> {
        await this.$execute('DELETE', '/tasks/{userId}', [{ name: 'userId', value: userId, transport: 'PATH' }]);
    }

    /**
     * Delete all tasks for user
     *
     * Creates a request that can be manipulated before sending it with the ```call()``` method.
     *
     * HTTP: DELETE /tasks/{userId}
     */
    removeTasksRequest(userId: string): RestClientRequest<void> {
        return this.$create('DELETE', '/tasks/{userId}', [{ name: 'userId', value: userId, transport: 'PATH' }]);
    }
}
