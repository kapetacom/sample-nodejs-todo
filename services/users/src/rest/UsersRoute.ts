//
// GENERATED SOURCE - DO NOT EDIT
//
import { RestRoute } from "@kapeta/sdk-rest-route";
import { IUsersRouteService } from "./IUsersRouteService";

export class UsersRoute extends RestRoute {
    constructor(service: IUsersRouteService) {
        super();
        this.initRoutes(service);
    }

    private initRoutes(service: IUsersRouteService) {
        //registerUser: Verify the method is available
        if (!service.registerUser) {
            throw new Error(
                'REST resource service for "Users" is missing method: "registerUser"'
            );
        }

        //registerUser: Verify the method is implemented correctly
        this.validateMethod(service.registerUser, "registerUser", ["user"]);

        //registerUser: Add route to server
        this.addEndpoint({
            method: "POST",
            path: "/register",
            description: "Register new user",
            arguments: [{ name: "user", transport: "BODY" }],
            handler: service.registerUser.bind(service),
        });

        //activateUser: Verify the method is available
        if (!service.activateUser) {
            throw new Error(
                'REST resource service for "Users" is missing method: "activateUser"'
            );
        }

        //activateUser: Verify the method is implemented correctly
        this.validateMethod(service.activateUser, "activateUser", ["user"]);

        //activateUser: Add route to server
        this.addEndpoint({
            method: "POST",
            path: "/activate",
            description: "Activate user registration",
            arguments: [{ name: "user", transport: "BODY" }],
            handler: service.activateUser.bind(service),
        });

        //authenticationUser: Verify the method is available
        if (!service.authenticationUser) {
            throw new Error(
                'REST resource service for "Users" is missing method: "authenticationUser"'
            );
        }

        //authenticationUser: Verify the method is implemented correctly
        this.validateMethod(service.authenticationUser, "authenticationUser", [
            "user",
        ]);

        //authenticationUser: Add route to server
        this.addEndpoint({
            method: "POST",
            path: "/authenticate",
            description: "Authenticate user",
            arguments: [{ name: "user", transport: "BODY" }],
            handler: service.authenticationUser.bind(service),
        });

        //resetPassword: Verify the method is available
        if (!service.resetPassword) {
            throw new Error(
                'REST resource service for "Users" is missing method: "resetPassword"'
            );
        }

        //resetPassword: Verify the method is implemented correctly
        this.validateMethod(service.resetPassword, "resetPassword", ["email"]);

        //resetPassword: Add route to server
        this.addEndpoint({
            method: "POST",
            path: "/reset_password",
            description: "Reset password for user",
            arguments: [{ name: "email", transport: "QUERY" }],
            handler: service.resetPassword.bind(service),
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
            arguments: [{ name: "id", transport: "PATH" }],
            handler: service.getUser.bind(service),
        });
    }
}
