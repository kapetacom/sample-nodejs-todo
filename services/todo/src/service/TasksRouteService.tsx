import {ITasksRouteService} from '../rest/ITasksRouteService';
import {Task} from "../entities/Task";
import {TasksDB} from "../data/TasksDB";
import {UsersClient} from "../clients/UsersClient";

export class TasksRouteService implements ITasksRouteService {
    private readonly db: TasksDB;
    private readonly users: UsersClient;

    constructor() {
        this.db = new TasksDB();
        this.users = new UsersClient()
    }


    /**
     * Add task for user
     * HTTP: POST /tasks/{userId}/{id}
     */
    async addTask(userId: string, id: string, task: Task): Promise<void> {
        const user = await this.users.getUserById(userId);
        if (!user) {
            throw new Error(`User with id ${userId} not found`);
        }
        await this.db.client.task.create({
            data: {
                id: id,
                title: task.title,
                description: task.description,
                done: task.done,
                userId: userId
            }
        });
    }


    /**
     * Mark task as done
     * HTTP: POST /tasks/{id}/done
     */
    async markAsDone(id: string): Promise<void> {
        await this.db.client.task.update({
            where: {
                id: id
            },
            data: {
                done: true
            }
        });
    }


    /**
     * Delete task
     * HTTP: DELETE /tasks/{id}
     */
    async removeTask(id: string): Promise<void> {
        await this.db.client.task.delete({
            where: {
                id
            }
        });
    }

}