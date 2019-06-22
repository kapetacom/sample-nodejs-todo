//
// GENERATED SOURCE - DO NOT EDIT
//
const RestRoute = require("@blockware/sdk-rest-route");

class TasksRoute extends RestRoute {
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
            "task"
        ]);

        //addTask: Add route to server
        this.addEndpoint({
            method: "POST",
            path: "/tasks/{userId}/{id}",
            description: "Add task for user",
            arguments: {
                userId: "path",
                id: "path",
                task: "body"
            },
            handler: service.addTask.bind(service)
        });
    }
}

module.exports = TasksRoute;
