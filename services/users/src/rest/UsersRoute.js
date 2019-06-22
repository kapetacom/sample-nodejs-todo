//
// GENERATED SOURCE - DO NOT EDIT
//
const RestRoute = require("@blockware/rest-route");

class UsersRoute extends RestRoute {
    constructor(service) {
        super();
        this._initRoutes(service);
    }

    _initRoutes(service) {
        //createUser: Verify the method is available
        if (!service.createUser) {
            throw new Error(
                'REST resource service for "Users" is missing method: "createUser"'
            );
        }

        //createUser: Verify the method is implemented correctly
        this.validateMethod(service.createUser, "createUser", ["id", "user"]);

        //createUser: Add route to server
        this.addEndpoint({
            method: "POST",
            path: "/users/{id}",
            description: "Create user",
            arguments: {
                id: "path",
                user: "body"
            },
            handler: service.createUser.bind(service)
        });

        //getUser: Verify the method is available
        if (!service.getUser) {
            throw new Error(
                'REST resource service for "Users" is missing method: "getUser"'
            );
        }

        //getUser: Verify the method is implemented correctly
        this.validateMethod(service.getUser, "getUser", ["id"]);

        //getUser: Add route to server
        this.addEndpoint({
            method: "GET",
            path: "/users/{id}",
            description: "Get user by id",
            arguments: {
                id: "path"
            },
            handler: service.getUser.bind(service)
        });

        //deleteUser: Verify the method is available
        if (!service.deleteUser) {
            throw new Error(
                'REST resource service for "Users" is missing method: "deleteUser"'
            );
        }

        //deleteUser: Verify the method is implemented correctly
        this.validateMethod(service.deleteUser, "deleteUser", ["id"]);

        //deleteUser: Add route to server
        this.addEndpoint({
            method: "DELETE",
            path: "/users/{id}",
            description: "Delete user by id",
            arguments: {
                id: "path"
            },
            handler: service.deleteUser.bind(service)
        });
    }
}

module.exports = UsersRoute;
