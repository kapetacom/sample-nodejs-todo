//
// GENERATED SOURCE - DO NOT EDIT
//
import { Router } from 'express';
import { asyncHandler } from '@kapeta/sdk-server';
import { ConfigProvider } from '@kapeta/sdk-config';
import { restAPIMiddleware, createRESTParameterParser } from '@kapeta/sdk-rest-route';
import { createTasksRouteService } from '../../service/TasksRouteService';
import {
    GetTasksRequest,
    GetTasksResponse,
    AddTaskRequest,
    AddTaskResponse,
    MarkAsDoneRequest,
    MarkAsDoneResponse,
    MarkAsUndoneRequest,
    MarkAsUndoneResponse,
    RemoveTaskRequest,
    RemoveTaskResponse,
    RemoveTasksRequest,
    RemoveTasksResponse,
} from './TasksRoutes';
import { json } from 'body-parser';

/**
 * creates all routes for the Tasks API
 */
export const createTasksRouter = async (configProvider: ConfigProvider) => {
    const router = Router();
    router.use(json());
    router.use(restAPIMiddleware);

    const service = await createTasksRouteService(configProvider);

    // getTasks: Verify the method is available
    if (!service.getTasks) {
        throw new Error('REST resource service for "Tasks" is missing method: "getTasks"');
    }

    console.log('Publishing REST method: GET /tasks/:userId');

    router.get(
        '/tasks/:userId',
        createRESTParameterParser<GetTasksRequest, GetTasksResponse>([
            { name: 'userId', transport: 'PATH', typeName: 'string' },
        ]),
        asyncHandler(service.getTasks.bind(service))
    );

    // addTask: Verify the method is available
    if (!service.addTask) {
        throw new Error('REST resource service for "Tasks" is missing method: "addTask"');
    }

    console.log('Publishing REST method: POST /tasks/:userId/:id');

    router.post(
        '/tasks/:userId/:id',
        createRESTParameterParser<AddTaskRequest, AddTaskResponse>([
            { name: 'userId', transport: 'PATH', typeName: 'string' },
            { name: 'id', transport: 'PATH', typeName: 'string' },
            { name: 'task', transport: 'BODY', typeName: 'Task' },
        ]),
        asyncHandler(service.addTask.bind(service))
    );

    // markAsDone: Verify the method is available
    if (!service.markAsDone) {
        throw new Error('REST resource service for "Tasks" is missing method: "markAsDone"');
    }

    console.log('Publishing REST method: POST /tasks/:userId/:id/done');

    router.post(
        '/tasks/:userId/:id/done',
        createRESTParameterParser<MarkAsDoneRequest, MarkAsDoneResponse>([
            { name: 'userId', transport: 'PATH', typeName: 'string' },
            { name: 'id', transport: 'PATH', typeName: 'string' },
        ]),
        asyncHandler(service.markAsDone.bind(service))
    );

    // markAsUndone: Verify the method is available
    if (!service.markAsUndone) {
        throw new Error('REST resource service for "Tasks" is missing method: "markAsUndone"');
    }

    console.log('Publishing REST method: POST /tasks/:userId/:id/undone');

    router.post(
        '/tasks/:userId/:id/undone',
        createRESTParameterParser<MarkAsUndoneRequest, MarkAsUndoneResponse>([
            { name: 'userId', transport: 'PATH', typeName: 'string' },
            { name: 'id', transport: 'PATH', typeName: 'string' },
        ]),
        asyncHandler(service.markAsUndone.bind(service))
    );

    // removeTask: Verify the method is available
    if (!service.removeTask) {
        throw new Error('REST resource service for "Tasks" is missing method: "removeTask"');
    }

    console.log('Publishing REST method: DELETE /tasks/:userId/:id');

    router.delete(
        '/tasks/:userId/:id',
        createRESTParameterParser<RemoveTaskRequest, RemoveTaskResponse>([
            { name: 'userId', transport: 'PATH', typeName: 'string' },
            { name: 'id', transport: 'PATH', typeName: 'string' },
        ]),
        asyncHandler(service.removeTask.bind(service))
    );

    // removeTasks: Verify the method is available
    if (!service.removeTasks) {
        throw new Error('REST resource service for "Tasks" is missing method: "removeTasks"');
    }

    console.log('Publishing REST method: DELETE /tasks/:userId');

    router.delete(
        '/tasks/:userId',
        createRESTParameterParser<RemoveTasksRequest, RemoveTasksResponse>([
            { name: 'userId', transport: 'PATH', typeName: 'string' },
        ]),
        asyncHandler(service.removeTasks.bind(service))
    );

    return router;
};
