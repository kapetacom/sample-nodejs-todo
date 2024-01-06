import { http, passthrough } from 'msw';

/**
 * Get all tasks for user
 * HTTP: GET /api/rest/tasks/tasks/:userId
 * Response type: Task[]
 */
export const tasks_getTasksHandler = http.get('*/api/rest/tasks/tasks/:userId', () => {
    // TODO: Return a response of type Task[]
    return passthrough();
});
