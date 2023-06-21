//
// GENERATED SOURCE - DO NOT EDIT
//
import { RestClient } from "@kapeta/sdk-rest-client";
import { Task } from "../../entities/Task";

class TasksClient {
    private readonly client: RestClient;

    constructor() {
        this.client = new RestClient("tasks");
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
        const result = await this.client.execute("GET", "/tasks/{userId}", [
            { name: "userId", value: userId, transport: "PATH" },
        ]);

        if (result === null) {
            return null;
        }
        return result as Task[];
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
        await this.client.execute("POST", "/tasks/{userId}/{id}", [
            { name: "userId", value: userId, transport: "PATH" },
            { name: "id", value: id, transport: "PATH" },
            { name: "task", value: task, transport: "BODY" },
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
        await this.client.execute("POST", "/tasks/{userId}/{id}/done", [
            { name: "userId", value: userId, transport: "PATH" },
            { name: "id", value: id, transport: "PATH" },
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
        await this.client.execute("DELETE", "/tasks/{userId}/{id}", [
            { name: "userId", value: userId, transport: "PATH" },
            { name: "id", value: id, transport: "PATH" },
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
        await this.client.execute("DELETE", "/tasks/{userId}", [
            { name: "userId", value: userId, transport: "PATH" },
        ]);
    }
}

export default new TasksClient();
