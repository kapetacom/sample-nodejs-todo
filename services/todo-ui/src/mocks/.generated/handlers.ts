import { sortHandlersByPathSpecificity } from './sortHandlers';
import { Tasks_getTasksHandler } from '../handlers/tasks/getTasksHandler';
import { Tasks_addTaskHandler } from '../handlers/tasks/addTaskHandler';
import { Tasks_markAsDoneHandler } from '../handlers/tasks/markAsDoneHandler';
import { Tasks_markAsUndoneHandler } from '../handlers/tasks/markAsUndoneHandler';
import { Tasks_removeTaskHandler } from '../handlers/tasks/removeTaskHandler';
import { Tasks_removeTasksHandler } from '../handlers/tasks/removeTasksHandler';

export const handlers = sortHandlersByPathSpecificity([
    Tasks_getTasksHandler,
    Tasks_addTaskHandler,
    Tasks_markAsDoneHandler,
    Tasks_markAsUndoneHandler,
    Tasks_removeTaskHandler,
    Tasks_removeTasksHandler,
]);
