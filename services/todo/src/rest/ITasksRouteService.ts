//
// GENERATED SOURCE - DO NOT EDIT
//
import { Task } from "../entities/Task";

export interface ITasksRouteService {
    /**
     * Get all tasks for user
     * HTTP: GET /tasks/{userId}
     */
    getTasks(userId: string): Promise<Task[]>;

    /**
     * Add task for user
     * HTTP: POST /tasks/{userId}/{id}
     */
    addTask(userId: string, id: string, task: Task): Promise<void>;

    /**
     * Mark task as done
     * HTTP: POST /tasks/{userId}/{id}/done
     */
    markAsDone(userId: string, id: string): Promise<void>;

    /**
     * Mark task as undone
     * HTTP: POST /tasks/{userId}/{id}/undone
     */
    markAsUndone(userId: string, id: string): Promise<void>;

    /**
     * Delete task
     * HTTP: DELETE /tasks/{userId}/{id}
     */
    removeTask(userId: string, id: string): Promise<void>;

    /**
     * Delete all tasks for user
     * HTTP: DELETE /tasks/{userId}
     */
    removeTasks(userId: string): Promise<void>;
}
