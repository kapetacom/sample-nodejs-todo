//
// GENERATED SOURCE - DO NOT EDIT
//

import { useMemo } from 'react';
import { RestClient, RestClientRequest } from '@kapeta/sdk-web-rest-client';
import { Task } from '../../../.generated/entities/Task';

export type ConfigureTasksClient = (client: TasksClient) => TasksClient;

/**
 * Creates a new TasksClient for React components.
 * The client is configured with the provided configuration function.
 *
 * It is wrapped in a useMemo hook to ensure that the client is only created once.
 */
export const useTasksClient = (configure?: ConfigureTasksClient): TasksClient => {
    return useMemo(() => {
        const client = new TasksClient();
        if (configure) {
            return configure(client);
        }
        return client;
    }, [configure]);
};

/**
 * A client for the Tasks API.
 * Use the useTasksClient hook to create a client in React.
 *
 * Use the TasksClient directly in other contexts.
 */
export class TasksClient extends RestClient {
    constructor() {
        super('api/rest/tasks');
    }

    /**
     * Get all tasks for user
     * HTTP: GET /api/rest/tasks/tasks/{userId}
     */
    async getTasks(userId: string): Promise<Task[] | null> {
        const result = await this.$execute<Task[]>('GET', '/tasks/{userId}', [
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
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: GET /api/rest/tasks/tasks/{userId}
     */
    getTasksRequest(userId: string): RestClientRequest<Task[] | null> {
        return this.$create<Task[]>('GET', '/tasks/{userId}', [{ name: 'userId', value: userId, transport: 'PATH' }]);
    }

    /**
     * Add task for user
     * HTTP: POST /api/rest/tasks/tasks/{userId}/{id}
     */
    async addTask(userId: string, id: string, task: Task): Promise<void> {
        await this.$execute<void>('POST', '/tasks/{userId}/{id}', [
            { name: 'userId', value: userId, transport: 'PATH' },
            { name: 'id', value: id, transport: 'PATH' },
            { name: 'task', value: task, transport: 'BODY' },
        ]);
    }

    /**
     * Add task for user
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: POST /api/rest/tasks/tasks/{userId}/{id}
     */
    addTaskRequest(userId: string, id: string, task: Task): RestClientRequest<void> {
        return this.$create<void>('POST', '/tasks/{userId}/{id}', [
            { name: 'userId', value: userId, transport: 'PATH' },
            { name: 'id', value: id, transport: 'PATH' },
            { name: 'task', value: task, transport: 'BODY' },
        ]);
    }

    /**
     * Mark task as done
     * HTTP: POST /api/rest/tasks/tasks/{userId}/{id}/done
     */
    async markAsDone(userId: string, id: string): Promise<void> {
        await this.$execute<void>('POST', '/tasks/{userId}/{id}/done', [
            { name: 'userId', value: userId, transport: 'PATH' },
            { name: 'id', value: id, transport: 'PATH' },
        ]);
    }

    /**
     * Mark task as done
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: POST /api/rest/tasks/tasks/{userId}/{id}/done
     */
    markAsDoneRequest(userId: string, id: string): RestClientRequest<void> {
        return this.$create<void>('POST', '/tasks/{userId}/{id}/done', [
            { name: 'userId', value: userId, transport: 'PATH' },
            { name: 'id', value: id, transport: 'PATH' },
        ]);
    }

    /**
     * Mark task as undone
     * HTTP: POST /api/rest/tasks/tasks/{userId}/{id}/undone
     */
    async markAsUndone(userId: string, id: string): Promise<void> {
        await this.$execute<void>('POST', '/tasks/{userId}/{id}/undone', [
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
     * HTTP: POST /api/rest/tasks/tasks/{userId}/{id}/undone
     */
    markAsUndoneRequest(userId: string, id: string): RestClientRequest<void> {
        return this.$create<void>('POST', '/tasks/{userId}/{id}/undone', [
            { name: 'userId', value: userId, transport: 'PATH' },
            { name: 'id', value: id, transport: 'PATH' },
        ]);
    }

    /**
     * Delete task
     * HTTP: DELETE /api/rest/tasks/tasks/{userId}/{id}
     */
    async removeTask(userId: string, id: string): Promise<void> {
        await this.$execute<void>('DELETE', '/tasks/{userId}/{id}', [
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
     * HTTP: DELETE /api/rest/tasks/tasks/{userId}/{id}
     */
    removeTaskRequest(userId: string, id: string): RestClientRequest<void> {
        return this.$create<void>('DELETE', '/tasks/{userId}/{id}', [
            { name: 'userId', value: userId, transport: 'PATH' },
            { name: 'id', value: id, transport: 'PATH' },
        ]);
    }

    /**
     * Delete all tasks for user
     * HTTP: DELETE /api/rest/tasks/tasks/{userId}
     */
    async removeTasks(userId: string): Promise<void> {
        await this.$execute<void>('DELETE', '/tasks/{userId}', [{ name: 'userId', value: userId, transport: 'PATH' }]);
    }

    /**
     * Delete all tasks for user
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: DELETE /api/rest/tasks/tasks/{userId}
     */
    removeTasksRequest(userId: string): RestClientRequest<void> {
        return this.$create<void>('DELETE', '/tasks/{userId}', [{ name: 'userId', value: userId, transport: 'PATH' }]);
    }
}
