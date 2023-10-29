/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

//
// GENERATED SOURCE - DO NOT EDIT
//
import { RestRoute } from "@kapeta/sdk-rest-route";
import client from "../clients/UsersClient";

export class UsersClientRoute extends RestRoute {
    constructor() {
        super();
        this._initRoutes();
    }

    _initRoutes() {
        //registerUser: Verify the method is available
        if (!client.registerUser) {
            throw new Error(
                'REST resource client for "Users" is missing method: "registerUser"'
            );
        }

        //registerUser: Verify the method is implemented correctly
        this.validateMethod(client.registerUser, "registerUser", ["user"]);

        //registerUser: Add route to server
        this.addEndpoint({
            method: "POST",
            path: "/api/register",
            description: "Register new user",
            arguments: [{ name: "user", transport: "BODY" }],
            handler: client.registerUser.bind(client),
        });

        //activateUser: Verify the method is available
        if (!client.activateUser) {
            throw new Error(
                'REST resource client for "Users" is missing method: "activateUser"'
            );
        }

        //activateUser: Verify the method is implemented correctly
        this.validateMethod(client.activateUser, "activateUser", ["user"]);

        //activateUser: Add route to server
        this.addEndpoint({
            method: "POST",
            path: "/api/activate",
            description: "Activate user registration",
            arguments: [{ name: "user", transport: "BODY" }],
            handler: client.activateUser.bind(client),
        });

        //authenticationUser: Verify the method is available
        if (!client.authenticationUser) {
            throw new Error(
                'REST resource client for "Users" is missing method: "authenticationUser"'
            );
        }

        //authenticationUser: Verify the method is implemented correctly
        this.validateMethod(client.authenticationUser, "authenticationUser", [
            "user",
        ]);

        //authenticationUser: Add route to server
        this.addEndpoint({
            method: "POST",
            path: "/api/authenticate",
            description: "Authenticate user",
            arguments: [{ name: "user", transport: "BODY" }],
            handler: client.authenticationUser.bind(client),
        });

        //resetPassword: Verify the method is available
        if (!client.resetPassword) {
            throw new Error(
                'REST resource client for "Users" is missing method: "resetPassword"'
            );
        }

        //resetPassword: Verify the method is implemented correctly
        this.validateMethod(client.resetPassword, "resetPassword", ["email"]);

        //resetPassword: Add route to server
        this.addEndpoint({
            method: "POST",
            path: "/api/reset_password",
            description: "Reset password for user",
            arguments: [{ name: "email", transport: "QUERY" }],
            handler: client.resetPassword.bind(client),
        });

        //getUser: Verify the method is available
        if (!client.getUser) {
            throw new Error(
                'REST resource client for "Users" is missing method: "getUser"'
            );
        }

        //getUser: Verify the method is implemented correctly
        this.validateMethod(client.getUser, "getUser", ["id"]);

        //getUser: Add route to server
        this.addEndpoint({
            method: "GET",
            path: "/api/users/{id}",
            description: "Get user by id",
            arguments: [{ name: "id", transport: "PATH" }],
            handler: client.getUser.bind(client),
        });
    }
}
