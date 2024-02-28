import React from 'react';
import { createRoot } from 'react-dom/client';
import { enableApiMocking } from '../../../mocks/enableApiMocking';
import { TodowebPage } from './TodowebPage';

/*
The main entry point for the Todoweb page.

Creates a container div and renders the TodowebPage component into it. To change the page content,
edit the TodowebPage component instead.
This file should only be edited if you need to preload or setup some things before the page is rendered.
When running in development mode the API mocking is available.
Call window.enableMockApi(true) in the browser console to enable it.

*/

const container = document.createElement('div');
container.classList.add('application-container');
document.body.append(container);

void (async () => {
    if (process.env.NODE_ENV === 'development') {
        await enableApiMocking();
    }

    createRoot(container).render(<TodowebPage />);
})();
