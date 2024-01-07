//
// GENERATED SOURCE - DO NOT EDIT
//

import { MongoDB as $MongoDB, createMongoDBClient as $createMongoDBClient } from '@kapeta/sdk-nosql-mongodb';
import { Prisma, PrismaClient } from './clients/tasks';
import { ConfigProvider } from '@kapeta/sdk-config';

export type TasksDBClient = PrismaClient;

function createClient(opts: Prisma.PrismaClientOptions): TasksDBClient {
    return new PrismaClient(opts);
}

/*
 * Create a ready and connected TasksDB client.
 *
 * See https://github.com/kapetacom/sdk-nodejs-nosql-mongodb for more information.
 */
export const createTasksDBClient = (config: ConfigProvider) => {
    return $createMongoDBClient<TasksDBClient>(config, 'tasks', createClient);
};

/**
 * Use this class to access the tasks database.
 * Also see {@link createTasksDBClient} as the recommended way of connecting to the database.
 *
 * See https://github.com/kapetacom/sdk-nodejs-nosql-mongodb for more information.
 */
export class TasksDB extends $MongoDB<TasksDBClient> {
    constructor() {
        super('tasks');
    }

    createClient(opts: any): TasksDBClient {
        return createClient(opts);
    }
}
