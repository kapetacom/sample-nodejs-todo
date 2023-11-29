/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import { RESTError } from '@kapeta/sdk-rest-route';
import { TasksRoutes } from 'generated:rest/TasksRoutes';
import { TasksDB } from 'generated:data/TasksDB';
import { UsersClient } from 'generated:clients/UsersClient';
import { Task } from 'generated:entities/Task';
import { Request, Response } from 'express';

export class TasksRouteService implements TasksRoutes {
    private readonly db: TasksDB;
    private readonly users: UsersClient;

    constructor() {
        this.db = new TasksDB();
        this.users = new UsersClient();
    }

    private async verifyUserAccess(req: Request<{userId:string,[a:string]:string}, any, any, any, any>): Promise<void> {
        if (!req.auth) {
            throw new RESTError('Tasks needs authenticated request', 401);
        }
        const user = await this.users.getUserById(req.params.userId);

        if (!user) {
            throw new RESTError(`User with id ${req.params.userId} not found`, 401);
        }
    }

    /**
     * Add task for user
     * HTTP: POST /tasks/{userId}/{id}
     */
    async addTask(req: Request<{ userId: string; id: string }, void, Task, void>, res: Response): Promise<void> {
        await this.verifyUserAccess(req);
        const { userId, id } = req.params;
        const task = req.body;

        await this.db.client.$transaction(async (db) => {
            const existing = await db.task.findUnique({
                where: {
                    id,
                },
            });

            if (existing) {
                throw new RESTError(`Task with id ${id} already exists`, 409);
            }

            await db.task.create({
                data: {
                    id: id,
                    title: task.title,
                    description: task.description,
                    done: task.done,
                    userId: userId,
                },
            });
        });

        res.status(201).end();
    }

    /**
     * Mark task as done
     * HTTP: POST /tasks/{id}/done
     */
    async markAsDone(req: Request<{ userId: string; id: string }, void, void, void>, res: Response): Promise<void> {
        await this.verifyUserAccess(req);
        const { userId, id } = req.params;
        await this.db.client.task.updateMany({
            where: {
                id,
                userId,
            },
            data: {
                done: true,
            },
        });

        res.status(201).end();
    }

    async markAsUndone(req: Request<{ userId: string; id: string }, void, void, void>, res: Response): Promise<void> {
        await this.verifyUserAccess(req);
        const { userId, id } = req.params;
        await this.db.client.task.updateMany({
            where: {
                id,
                userId,
            },
            data: {
                done: false,
            },
        });

        res.status(201).end();
    }

    async removeTask(req: Request<{ userId: string; id: string }, void, void, void>, res: Response): Promise<void> {
        await this.verifyUserAccess(req);
        const { userId, id } = req.params;
        await this.db.client.task.deleteMany({
            where: {
                id,
                userId,
            },
        });

        res.status(201).end();
    }

    async getTasks(req: Request<{ userId: string }, Task[], void, void>, res: Response<Task[]>): Promise<void> {
        await this.verifyUserAccess(req);
        const { userId } = req.params;
        const tasks = await this.db.client.task.findMany({
            where: {
                userId,
            },
        });

        res.json(
            tasks.map((task) => {
                return {
                    id: task.id,
                    userId: task.userId,
                    title: task.title,
                    description: task.description,
                    done: task.done,
                };
            })
        );
    }

    async removeTasks(req: Request<{ userId: string }, void, void, void>, res: Response): Promise<void> {
        await this.verifyUserAccess(req);
        const { userId } = req.params;
        await this.db.client.task.deleteMany({
            where: {
                userId,
            },
        });

        res.status(201).end();
    }
}
