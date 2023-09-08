//
// GENERATED SOURCE - DO NOT EDIT
//
import { RestRoute } from "@kapeta/sdk-rest-route";
import { ITasksRouteService } from "./ITasksRouteService";

export class TasksRoute extends RestRoute {
    constructor(service: ITasksRouteService) {
        super();
        this.initRoutes(service);
    }

    private initRoutes(service: ITasksRouteService) {
        //getTasks: Verify the method is available
        if (!service.getTasks) {
            throw new Error(
                'REST resource service for "Tasks" is missing method: "getTasks"'
            );
        }

        //getTasks: Verify the method is implemented correctly
        this.validateMethod(service.getTasks, "getTasks", ["userId"]);

        //getTasks: Add route to server
        this.addEndpoint({
            method: "GET",
            path: "/tasks/{userId}",
            description: "Get all tasks for user",
            arguments: [{ name: "userId", transport: "PATH" }],
            handler: service.getTasks.bind(service),
        });

        //addTask: Verify the method is available
        if (!service.addTask) {
            throw new Error(
                'REST resource service for "Tasks" is missing method: "addTask"'
            );
        }

        //addTask: Verify the method is implemented correctly
        this.validateMethod(service.addTask, "addTask", [
            "userId",
            "id",
            "task",
        ]);

        //addTask: Add route to server
        this.addEndpoint({
            method: "POST",
            path: "/tasks/{userId}/{id}",
            description: "Add task for user",
            arguments: [
                { name: "userId", transport: "PATH" },
                { name: "id", transport: "PATH" },
                { name: "task", transport: "BODY" },
            ],
            handler: service.addTask.bind(service),
        });

        //markAsDone: Verify the method is available
        if (!service.markAsDone) {
            throw new Error(
                'REST resource service for "Tasks" is missing method: "markAsDone"'
            );
        }

        //markAsDone: Verify the method is implemented correctly
        this.validateMethod(service.markAsDone, "markAsDone", ["userId", "id"]);

        //markAsDone: Add route to server
        this.addEndpoint({
            method: "POST",
            path: "/tasks/{userId}/{id}/done",
            description: "Mark task as done",
            arguments: [
                { name: "userId", transport: "PATH" },
                { name: "id", transport: "PATH" },
            ],
            handler: service.markAsDone.bind(service),
        });

        //markAsUndone: Verify the method is available
        if (!service.markAsUndone) {
            throw new Error(
                'REST resource service for "Tasks" is missing method: "markAsUndone"'
            );
        }

        //markAsUndone: Verify the method is implemented correctly
        this.validateMethod(service.markAsUndone, "markAsUndone", [
            "userId",
            "id",
        ]);

        //markAsUndone: Add route to server
        this.addEndpoint({
            method: "POST",
            path: "/tasks/{userId}/{id}/undone",
            description: "Mark task as undone",
            arguments: [
                { name: "userId", transport: "PATH" },
                { name: "id", transport: "PATH" },
            ],
            handler: service.markAsUndone.bind(service),
        });

        //removeTask: Verify the method is available
        if (!service.removeTask) {
            throw new Error(
                'REST resource service for "Tasks" is missing method: "removeTask"'
            );
        }

        //removeTask: Verify the method is implemented correctly
        this.validateMethod(service.removeTask, "removeTask", ["userId", "id"]);

        //removeTask: Add route to server
        this.addEndpoint({
            method: "DELETE",
            path: "/tasks/{userId}/{id}",
            description: "Delete task",
            arguments: [
                { name: "userId", transport: "PATH" },
                { name: "id", transport: "PATH" },
            ],
            handler: service.removeTask.bind(service),
        });

        //removeTasks: Verify the method is available
        if (!service.removeTasks) {
            throw new Error(
                'REST resource service for "Tasks" is missing method: "removeTasks"'
            );
        }

        //removeTasks: Verify the method is implemented correctly
        this.validateMethod(service.removeTasks, "removeTasks", ["userId"]);

        //removeTasks: Add route to server
        this.addEndpoint({
            method: "DELETE",
            path: "/tasks/{userId}",
            description: "Delete all tasks for user ",
            arguments: [{ name: "userId", transport: "PATH" }],
            handler: service.removeTasks.bind(service),
        });
    }
}
