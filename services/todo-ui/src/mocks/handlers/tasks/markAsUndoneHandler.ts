import { http, HttpResponse } from 'msw';

/**
 * Mark task as undone
 *
 * HTTP: POST /api/rest/tasks/tasks/:userId/:id/undone
 * Response type: void
 */
export const Tasks_markAsUndoneHandler = http.post(
    '*/api/rest/tasks/tasks/:userId/:id/undone',

    () => {
        return new HttpResponse(null, { status: 200 });
    }
);
