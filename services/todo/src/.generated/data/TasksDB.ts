//
// GENERATED SOURCE - DO NOT EDIT
//

import { MongoDB } from '@kapeta/sdk-nosql-mongodb';
import { Prisma, PrismaClient } from './clients/tasks';

export class TasksDB extends MongoDB<PrismaClient> {
    constructor() {
        super('tasks');
    }

    createClient(opts: Prisma.PrismaClientOptions): PrismaClient {
        return new PrismaClient(opts);
    }
}
