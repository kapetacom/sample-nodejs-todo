//
// GENERATED SOURCE - DO NOT EDIT
//

import { RestClient } from "@kapeta/sdk-web-rest-client";
import { Task } from "../../entities/Task";

export class TasksClient {
    private client: RestClient;

    constructor() {
        this.client = new RestClient("api/rest/tasks");
    }

    /**
     * Get all tasks for user
     * HTTP: GET /api/rest/tasks/tasks/{userId}
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
     * HTTP: POST /api/rest/tasks/tasks/{userId}/{id}
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
     * HTTP: POST /api/rest/tasks/tasks/{userId}/{id}/done
     */
    async markAsDone(userId: string, id: string): Promise<void> {
        await this.client.execute("POST", "/tasks/{userId}/{id}/done", [
            { name: "userId", value: userId, transport: "PATH" },
            { name: "id", value: id, transport: "PATH" },
        ]);
    }

    /**
     * Mark task as undone
     * HTTP: POST /api/rest/tasks/tasks/{userId}/{id}/undone
     */
    async markAsUndone(userId: string, id: string): Promise<void> {
        await this.client.execute("POST", "/tasks/{userId}/{id}/undone", [
            { name: "userId", value: userId, transport: "PATH" },
            { name: "id", value: id, transport: "PATH" },
        ]);
    }

    /**
     * Delete task
     * HTTP: DELETE /api/rest/tasks/tasks/{userId}/{id}
     */
    async removeTask(userId: string, id: string): Promise<void> {
        await this.client.execute("DELETE", "/tasks/{userId}/{id}", [
            { name: "userId", value: userId, transport: "PATH" },
            { name: "id", value: id, transport: "PATH" },
        ]);
    }

    /**
     * Delete all tasks for user
     * HTTP: DELETE /api/rest/tasks/tasks/{userId}
     */
    async removeTasks(userId: string): Promise<void> {
        await this.client.execute("DELETE", "/tasks/{userId}", [
            { name: "userId", value: userId, transport: "PATH" },
        ]);
    }
}
