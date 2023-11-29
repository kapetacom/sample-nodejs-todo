import { http, HttpResponse } from "msw";

/**
 * Add task for user
 * HTTP: POST /api/rest/tasks/tasks/:userId/:id
 * Response type: void
 */
export const addTaskHandler = http.post(
    "*/api/rest/tasks/tasks/:userId/:id",
    () => {
        return new HttpResponse(null, { status: 200 });
    }
);
