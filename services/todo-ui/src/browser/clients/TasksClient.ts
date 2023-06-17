//
// GENERATED SOURCE - DO NOT EDIT
//

import { RestClient } from "@kapeta/sdk-web-rest-client";
import { Task } from "../../entities/Task";

export class TasksClient {
    client: RestClient;

    constructor() {
        this.client = new RestClient("/api/");
    }

    /**
     * Get all tasks for user
     * HTTP: GET /api/tasks/{userId}
     */
    getTasks(userId: string): Promise<Task[]> {
        return this.client.execute("GET", "/tasks/{userId}", [
            { name: "userId", value: userId, transport: "PATH" },
        ]);
    }

    /**
     * Add task for user
     * HTTP: POST /api/tasks/{userId}/{id}
     */
    addTask(userId: string, id: string, task: Task): Promise<void> {
        return this.client.execute("POST", "/tasks/{userId}/{id}", [
            { name: "userId", value: userId, transport: "PATH" },
            { name: "id", value: id, transport: "PATH" },
            { name: "task", value: task, transport: "BODY" },
        ]);
    }

    /**
     * Mark task as done
     * HTTP: POST /api/tasks/{userId}/{id}/done
     */
    markAsDone(userId: string, id: string): Promise<void> {
        return this.client.execute("POST", "/tasks/{userId}/{id}/done", [
            { name: "userId", value: userId, transport: "PATH" },
            { name: "id", value: id, transport: "PATH" },
        ]);
    }

    /**
     * Delete task
     * HTTP: DELETE /api/tasks/{userId}/{id}
     */
    removeTask(userId: string, id: string): Promise<void> {
        return this.client.execute("DELETE", "/tasks/{userId}/{id}", [
            { name: "userId", value: userId, transport: "PATH" },
            { name: "id", value: id, transport: "PATH" },
        ]);
    }

    /**
     * Delete all tasks for user
     * HTTP: DELETE /api/tasks/{userId}
     */
    removeTasks(userId: string): Promise<void> {
        return this.client.execute("DELETE", "/tasks/{userId}", [
            { name: "userId", value: userId, transport: "PATH" },
        ]);
    }
}
