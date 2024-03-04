import { http, HttpResponse } from 'msw';

/**
 * Delete task
 *
 * HTTP: DELETE /api/rest/tasks/tasks/:userId/:id
 * Response type: void
 */
export const Tasks_removeTaskHandler = http.delete(
    '*/api/rest/tasks/tasks/:userId/:id',

    () => {
        return new HttpResponse(null, { status: 200 });
    }
);
