/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

//
// GENERATED SOURCE - DO NOT EDIT
//
import { RestRoute } from "@kapeta/sdk-rest-route";
import client from "../clients/TasksClient";

export class TasksClientRoute extends RestRoute {
    constructor() {
        super();
        this._initRoutes();
    }

    _initRoutes() {
        //getTasks: Verify the method is available
        if (!client.getTasks) {
            throw new Error(
                'REST resource client for "Tasks" is missing method: "getTasks"'
            );
        }

        //getTasks: Verify the method is implemented correctly
        this.validateMethod(client.getTasks, "getTasks", ["userId"]);

        //getTasks: Add route to server
        this.addEndpoint({
            method: "GET",
            path: "/api/tasks/{userId}",
            description: "Get all tasks for user",
            arguments: [{ name: "userId", transport: "PATH" }],
            handler: client.getTasks.bind(client),
        });

        //addTask: Verify the method is available
        if (!client.addTask) {
            throw new Error(
                'REST resource client for "Tasks" is missing method: "addTask"'
            );
        }

        //addTask: Verify the method is implemented correctly
        this.validateMethod(client.addTask, "addTask", [
            "userId",
            "id",
            "task",
        ]);

        //addTask: Add route to server
        this.addEndpoint({
            method: "POST",
            path: "/api/tasks/{userId}/{id}",
            description: "Add task for user",
            arguments: [
                { name: "userId", transport: "PATH" },
                { name: "id", transport: "PATH" },
                { name: "task", transport: "BODY" },
            ],
            handler: client.addTask.bind(client),
        });

        //markAsDone: Verify the method is available
        if (!client.markAsDone) {
            throw new Error(
                'REST resource client for "Tasks" is missing method: "markAsDone"'
            );
        }

        //markAsDone: Verify the method is implemented correctly
        this.validateMethod(client.markAsDone, "markAsDone", ["userId", "id"]);

        //markAsDone: Add route to server
        this.addEndpoint({
            method: "POST",
            path: "/api/tasks/{userId}/{id}/done",
            description: "Mark task as done",
            arguments: [
                { name: "userId", transport: "PATH" },
                { name: "id", transport: "PATH" },
            ],
            handler: client.markAsDone.bind(client),
        });

        //removeTask: Verify the method is available
        if (!client.removeTask) {
            throw new Error(
                'REST resource client for "Tasks" is missing method: "removeTask"'
            );
        }

        //removeTask: Verify the method is implemented correctly
        this.validateMethod(client.removeTask, "removeTask", ["userId", "id"]);

        //removeTask: Add route to server
        this.addEndpoint({
            method: "DELETE",
            path: "/api/tasks/{userId}/{id}",
            description: "Delete task",
            arguments: [
                { name: "userId", transport: "PATH" },
                { name: "id", transport: "PATH" },
            ],
            handler: client.removeTask.bind(client),
        });

        //removeTasks: Verify the method is available
        if (!client.removeTasks) {
            throw new Error(
                'REST resource client for "Tasks" is missing method: "removeTasks"'
            );
        }

        //removeTasks: Verify the method is implemented correctly
        this.validateMethod(client.removeTasks, "removeTasks", ["userId"]);

        //removeTasks: Add route to server
        this.addEndpoint({
            method: "DELETE",
            path: "/api/tasks/{userId}",
            description: "Delete all tasks for user ",
            arguments: [{ name: "userId", transport: "PATH" }],
            handler: client.removeTasks.bind(client),
        });
    }
}
