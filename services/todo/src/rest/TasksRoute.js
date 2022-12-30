//
// GENERATED SOURCE - DO NOT EDIT
//
const RESTRoute = require("@blockware/sdk-rest-route");

class TasksRoute extends RESTRoute {
    constructor(service) {
        super();
        this._initRoutes(service);
    }

    _initRoutes(service) {
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
                { name: "userId", transport: "path" },
                { name: "id", transport: "path" },
                { name: "task", transport: "body" },
            ],
            handler: service.addTask.bind(service),
        });
    }
}

module.exports = TasksRoute;
