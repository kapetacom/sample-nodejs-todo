//
// GENERATED SOURCE - DO NOT EDIT
//
import { Router } from 'express';
import { asyncHandler } from '@kapeta/sdk-server';
import { ConfigProvider } from '@kapeta/sdk-config';
import { restAPIMiddleware, createRESTParameterParser } from '@kapeta/sdk-rest-route';
import { createUsersRouteService } from '../../service/UsersRouteService';
import {
    RegisterUserRequest,
    RegisterUserResponse,
    ActivateUserRequest,
    ActivateUserResponse,
    AuthenticationUserRequest,
    AuthenticationUserResponse,
    ResetPasswordRequest,
    ResetPasswordResponse,
    ChangePasswordRequest,
    ChangePasswordResponse,
    GetUserRequest,
    GetUserResponse,
} from './UsersRoutes';
import { json } from 'body-parser';

/**
 * creates all routes for the Users API
 */
export const createUsersRouter = async (configProvider: ConfigProvider) => {
    const router = Router();
    router.use(json());
    router.use(restAPIMiddleware);

    const service = await createUsersRouteService(configProvider);

    // registerUser: Verify the method is available
    if (!service.registerUser) {
        throw new Error('REST resource service for "Users" is missing method: "registerUser"');
    }

    console.log('Publishing REST method: POST /register');

    router.post(
        '/register',
        createRESTParameterParser<RegisterUserRequest, RegisterUserResponse>([
            { name: 'user', transport: 'BODY', typeName: 'UserRegistration' },
        ]),
        asyncHandler(service.registerUser.bind(service))
    );

    // activateUser: Verify the method is available
    if (!service.activateUser) {
        throw new Error('REST resource service for "Users" is missing method: "activateUser"');
    }

    console.log('Publishing REST method: POST /activate');

    router.post(
        '/activate',
        createRESTParameterParser<ActivateUserRequest, ActivateUserResponse>([
            { name: 'user', transport: 'BODY', typeName: 'UserActivation' },
        ]),
        asyncHandler(service.activateUser.bind(service))
    );

    // authenticationUser: Verify the method is available
    if (!service.authenticationUser) {
        throw new Error('REST resource service for "Users" is missing method: "authenticationUser"');
    }

    console.log('Publishing REST method: POST /authenticate');

    router.post(
        '/authenticate',
        createRESTParameterParser<AuthenticationUserRequest, AuthenticationUserResponse>([
            { name: 'user', transport: 'BODY', typeName: 'UserAuthentication' },
        ]),
        asyncHandler(service.authenticationUser.bind(service))
    );

    // resetPassword: Verify the method is available
    if (!service.resetPassword) {
        throw new Error('REST resource service for "Users" is missing method: "resetPassword"');
    }

    console.log('Publishing REST method: POST /reset_password');

    router.post(
        '/reset_password',
        createRESTParameterParser<ResetPasswordRequest, ResetPasswordResponse>([
            { name: 'email', transport: 'QUERY', typeName: 'string' },
        ]),
        asyncHandler(service.resetPassword.bind(service))
    );

    // changePassword: Verify the method is available
    if (!service.changePassword) {
        throw new Error('REST resource service for "Users" is missing method: "changePassword"');
    }

    console.log('Publishing REST method: POST /change_password');

    router.post(
        '/change_password',
        createRESTParameterParser<ChangePasswordRequest, ChangePasswordResponse>([
            { name: 'change', transport: 'BODY', typeName: 'PasswordChangeRequest' },
        ]),
        asyncHandler(service.changePassword.bind(service))
    );

    // getUser: Verify the method is available
    if (!service.getUser) {
        throw new Error('REST resource service for "Users" is missing method: "getUser"');
    }

    console.log('Publishing REST method: GET /users/:id');

    router.get(
        '/users/:id',
        createRESTParameterParser<GetUserRequest, GetUserResponse>([
            { name: 'id', transport: 'PATH', typeName: 'string' },
        ]),
        asyncHandler(service.getUser.bind(service))
    );

    return router;
};
