import { getTasksHandler } from "./handlers/tasks/getTasksHandler";
import { addTaskHandler } from "./handlers/tasks/addTaskHandler";
import { markAsDoneHandler } from "./handlers/tasks/markAsDoneHandler";
import { markAsUndoneHandler } from "./handlers/tasks/markAsUndoneHandler";
import { removeTaskHandler } from "./handlers/tasks/removeTaskHandler";
import { removeTasksHandler } from "./handlers/tasks/removeTasksHandler";

export const handlers = [
    getTasksHandler,
    addTaskHandler,
    markAsDoneHandler,
    markAsUndoneHandler,
    removeTaskHandler,
    removeTasksHandler,
];
