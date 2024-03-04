import { http, HttpResponse } from 'msw';

/**
 * Delete all tasks for user
 *
 * HTTP: DELETE /api/rest/tasks/tasks/:userId
 * Response type: void
 */
export const Tasks_removeTasksHandler = http.delete(
    '*/api/rest/tasks/tasks/:userId',

    () => {
        return new HttpResponse(null, { status: 200 });
    }
);
