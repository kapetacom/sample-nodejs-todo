/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import {RESTError} from '@kapeta/sdk-rest-route';
import {TasksRoutes} from 'generated:rest/TasksRoutes';
import {createTasksDBClient, TasksDBClient} from 'generated:data/TasksDB';
import {createUsersClient} from 'generated:clients/UsersClient';
import {Request} from 'express';
import {ConfigProvider} from "@kapeta/sdk-config";

export const createTasksRouteService = async (config: ConfigProvider): Promise<TasksRoutes> => {
    const db = await createTasksDBClient(config);
    const usersClient = await createUsersClient(config);

    async function verifyUserAccess(req: Request<{userId:string}, any, any, any, any>): Promise<void> {
        if (!req.auth) {
            throw new RESTError('Tasks needs authenticated request', 401);
        }

        if (req.auth.payload.sub !== req.params.userId) {
            throw new RESTError(`Access to user ${req.params.userId} not allowed`, 401);
        }


        const user = await usersClient.getUserById(req.params.userId);

        if (!user) {
            throw new RESTError(`User with id ${req.params.userId} not found`, 401);
        }
    }

    return {


        /**
         * Add task for user
         * HTTP: POST /tasks/{userId}/{id}
         */
        async addTask(req, res): Promise<void> {
            await verifyUserAccess(req);

            const {userId, id} = req.params;
            const task = req.body;

            await db.$transaction(async (db) => {
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
        },

        /**
         * Mark task as done
         * HTTP: POST /tasks/{id}/done
         */
        async markAsDone(req, res): Promise<void> {
            await verifyUserAccess(req);
            const {userId, id} = req.params;
            await db.task.updateMany({
                where: {
                    id,
                    userId,
                },
                data: {
                    done: true,
                },
            });

            res.status(201).end();
        },

        async markAsUndone(req, res): Promise<void> {
            await verifyUserAccess(req);
            const {userId, id} = req.params;
            await db.task.updateMany({
                where: {
                    id,
                    userId,
                },
                data: {
                    done: false,
                },
            });

            res.status(201).end();
        },

        async removeTask(req, res): Promise<void> {
            await verifyUserAccess(req);
            const {userId, id} = req.params;
            await db.task.deleteMany({
                where: {
                    id,
                    userId,
                },
            });

            res.status(201).end();
        },

        async getTasks(req, res): Promise<void> {
            await verifyUserAccess(req);
            const {userId} = req.params;
            const tasks = await db.task.findMany({
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
        },

        async removeTasks(req, res): Promise<void> {
            await verifyUserAccess(req);
            const {userId} = req.params;
            await db.task.deleteMany({
                where: {
                    userId,
                },
            });

            res.status(201).end();
        }
    }
}