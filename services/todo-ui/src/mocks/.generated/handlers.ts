import { tasks_getTasksHandler } from '../handlers/tasks/getTasksHandler';
import { tasks_addTaskHandler } from '../handlers/tasks/addTaskHandler';
import { tasks_markAsDoneHandler } from '../handlers/tasks/markAsDoneHandler';
import { tasks_markAsUndoneHandler } from '../handlers/tasks/markAsUndoneHandler';
import { tasks_removeTaskHandler } from '../handlers/tasks/removeTaskHandler';
import { tasks_removeTasksHandler } from '../handlers/tasks/removeTasksHandler';
export const handlers = [
    tasks_getTasksHandler,
    tasks_addTaskHandler,
    tasks_markAsDoneHandler,
    tasks_markAsUndoneHandler,
    tasks_removeTaskHandler,
    tasks_removeTasksHandler,
];
