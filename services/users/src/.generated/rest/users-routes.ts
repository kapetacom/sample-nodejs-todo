//
// GENERATED SOURCE - DO NOT EDIT
//
import { Router } from 'express';
import { asyncHandler } from '@kapeta/sdk-server';
import { restAPIMiddleware } from '@kapeta/sdk-rest-route';
import { UsersRouteService } from '../../service/UsersRouteService';
import { json } from 'body-parser';
export const createUsersRouter = () => {
    const router = Router();
    router.use(json());
    router.use(restAPIMiddleware);

    const service = new UsersRouteService();

    // registerUser: Verify the method is available
    if (!service.registerUser) {
        throw new Error('REST resource service for "Users" is missing method: "registerUser"');
    }

    console.log('Publishing REST method: POST /register');
    router.post('/register', asyncHandler(service.registerUser.bind(service)));

    // activateUser: Verify the method is available
    if (!service.activateUser) {
        throw new Error('REST resource service for "Users" is missing method: "activateUser"');
    }

    console.log('Publishing REST method: POST /activate');
    router.post('/activate', asyncHandler(service.activateUser.bind(service)));

    // authenticationUser: Verify the method is available
    if (!service.authenticationUser) {
        throw new Error('REST resource service for "Users" is missing method: "authenticationUser"');
    }

    console.log('Publishing REST method: POST /authenticate');
    router.post('/authenticate', asyncHandler(service.authenticationUser.bind(service)));

    // resetPassword: Verify the method is available
    if (!service.resetPassword) {
        throw new Error('REST resource service for "Users" is missing method: "resetPassword"');
    }

    console.log('Publishing REST method: POST /reset_password');
    router.post('/reset_password', asyncHandler(service.resetPassword.bind(service)));

    // changePassword: Verify the method is available
    if (!service.changePassword) {
        throw new Error('REST resource service for "Users" is missing method: "changePassword"');
    }

    console.log('Publishing REST method: POST /change_password');
    router.post('/change_password', asyncHandler(service.changePassword.bind(service)));

    // getUser: Verify the method is available
    if (!service.getUser) {
        throw new Error('REST resource service for "Users" is missing method: "getUser"');
    }

    console.log('Publishing REST method: GET /users/:id');
    router.get('/users/:id', asyncHandler(service.getUser.bind(service)));

    return router;
};
