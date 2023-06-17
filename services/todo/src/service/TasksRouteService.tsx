import {ITasksRouteService} from '../rest/ITasksRouteService';
import {Task} from "../entities/Task";
import {TasksDB} from "../data/TasksDB";
import {UsersClient} from "../clients/UsersClient";

export class TasksRouteService implements ITasksRouteService {
    private readonly db: TasksDB;
    private readonly users: UsersClient;

    constructor() {
        this.db = new TasksDB();
        this.users = new UsersClient();
    }

    private async checkUser(userId: string): Promise<void> {
        const user = await this.users.getUserById(userId);
        if (!user) {
            throw new Error(`User with id ${userId} not found`);
        }
    }


    /**
     * Add task for user
     * HTTP: POST /tasks/{userId}/{id}
     */
    async addTask(userId: string, id: string, task: Task): Promise<void> {
        await this.checkUser(userId);

        await this.db.client.$transaction(async (db) => {
            const existing = await db.task.findUnique({
                where: {
                    id
                }
            });

            if (existing) {
                throw new Error(`Task with id ${id} already exists`);
            }

            await db.task.create({
                data: {
                    id: id,
                    title: task.title,
                    description: task.description,
                    done: task.done,
                    userId: userId
                }
            });
        });
    }


    /**
     * Mark task as done
     * HTTP: POST /tasks/{id}/done
     */
    async markAsDone(userId:string, id: string): Promise<void> {
        await this.checkUser(userId);
        await this.db.client.task.updateMany({
            where: {
                id,
                userId
            },
            data: {
                done: true
            }
        });
    }


    async removeTask(userId: string, id: string): Promise<void> {
        await this.checkUser(userId);
        await this.db.client.task.deleteMany({
            where: {
                id,
                userId
            }
        });
    }

    async getTasks(userId: string): Promise<Task[]> {
        await this.checkUser(userId);
        const tasks = await this.db.client.task.findMany({
            where: {
                userId
            }
        });

        return tasks.map(task => {
            return {
                id: task.id,
                userId: task.userId,
                title: task.title,
                description: task.description,
                done: task.done
            }
        });
    }

    async removeTasks(userId: string): Promise<void> {
        await this.checkUser(userId);
        await this.db.client.task.deleteMany({
            where: {
                userId
            }
        });
    }

}