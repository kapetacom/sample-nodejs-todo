//
// GENERATED SOURCE - DO NOT EDIT
//
import type { RequestHandler } from "express";
import { Task } from "generated:entities/Task";

export interface TasksRoutes<
    Locals extends Record<string, any> = Record<string, any>
> {
    /**
     * Get all tasks for user
     * HTTP: GET /tasks/:userId
     */
    getTasks: RequestHandler<{ userId: string }, Task[], void, void, Locals>;

    /**
     * Add task for user
     * HTTP: POST /tasks/:userId/:id
     */
    addTask: RequestHandler<
        { userId: string; id: string },
        void,
        Task,
        void,
        Locals
    >;

    /**
     * Mark task as done
     * HTTP: POST /tasks/:userId/:id/done
     */
    markAsDone: RequestHandler<
        { userId: string; id: string },
        void,
        void,
        void,
        Locals
    >;

    /**
     * Mark task as undone
     * HTTP: POST /tasks/:userId/:id/undone
     */
    markAsUndone: RequestHandler<
        { userId: string; id: string },
        void,
        void,
        void,
        Locals
    >;

    /**
     * Delete task
     * HTTP: DELETE /tasks/:userId/:id
     */
    removeTask: RequestHandler<
        { userId: string; id: string },
        void,
        void,
        void,
        Locals
    >;

    /**
     * Delete all tasks for user
     * HTTP: DELETE /tasks/:userId
     */
    removeTasks: RequestHandler<{ userId: string }, void, void, void, Locals>;
}
