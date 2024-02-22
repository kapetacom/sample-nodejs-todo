//
// GENERATED SOURCE - DO NOT EDIT
//
import type { Request, Response } from 'express';
import { Task } from 'generated:entities/Task';

export type GetTasksRequest<Locals extends Record<string, any> = Record<string, any>> = Request<
    { userId: string },
    Task[],
    void,
    void,
    Locals
>;
export type GetTasksResponse<Locals extends Record<string, any> = Record<string, any>> = Response<Task[], Locals>;

export type AddTaskRequest<Locals extends Record<string, any> = Record<string, any>> = Request<
    { userId: string; id: string },
    void,
    Task,
    void,
    Locals
>;
export type AddTaskResponse<Locals extends Record<string, any> = Record<string, any>> = Response<void, Locals>;

export type MarkAsDoneRequest<Locals extends Record<string, any> = Record<string, any>> = Request<
    { userId: string; id: string },
    void,
    void,
    void,
    Locals
>;
export type MarkAsDoneResponse<Locals extends Record<string, any> = Record<string, any>> = Response<void, Locals>;

export type MarkAsUndoneRequest<Locals extends Record<string, any> = Record<string, any>> = Request<
    { userId: string; id: string },
    void,
    void,
    void,
    Locals
>;
export type MarkAsUndoneResponse<Locals extends Record<string, any> = Record<string, any>> = Response<void, Locals>;

export type RemoveTaskRequest<Locals extends Record<string, any> = Record<string, any>> = Request<
    { userId: string; id: string },
    void,
    void,
    void,
    Locals
>;
export type RemoveTaskResponse<Locals extends Record<string, any> = Record<string, any>> = Response<void, Locals>;

export type RemoveTasksRequest<Locals extends Record<string, any> = Record<string, any>> = Request<
    { userId: string },
    void,
    void,
    void,
    Locals
>;
export type RemoveTasksResponse<Locals extends Record<string, any> = Record<string, any>> = Response<void, Locals>;

/**
 * Defines the types for methods and routes of the Tasks API
 */
export interface TasksRoutes<Locals extends Record<string, any> = Record<string, any>> {
    /**
     * Get all tasks for user
     * HTTP: GET /tasks/:userId
     */
    getTasks(req: GetTasksRequest<Locals>, res: GetTasksResponse<Locals>): void | Promise<void>;

    /**
     * Add task for user
     * HTTP: POST /tasks/:userId/:id
     */
    addTask(req: AddTaskRequest<Locals>, res: AddTaskResponse<Locals>): void | Promise<void>;

    /**
     * Mark task as done
     * HTTP: POST /tasks/:userId/:id/done
     */
    markAsDone(req: MarkAsDoneRequest<Locals>, res: MarkAsDoneResponse<Locals>): void | Promise<void>;

    /**
     * Mark task as undone
     * HTTP: POST /tasks/:userId/:id/undone
     */
    markAsUndone(req: MarkAsUndoneRequest<Locals>, res: MarkAsUndoneResponse<Locals>): void | Promise<void>;

    /**
     * Delete task
     * HTTP: DELETE /tasks/:userId/:id
     */
    removeTask(req: RemoveTaskRequest<Locals>, res: RemoveTaskResponse<Locals>): void | Promise<void>;

    /**
     * Delete all tasks for user
     * HTTP: DELETE /tasks/:userId
     */
    removeTasks(req: RemoveTasksRequest<Locals>, res: RemoveTasksResponse<Locals>): void | Promise<void>;
}
