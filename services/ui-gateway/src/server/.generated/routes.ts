import { Router } from "express";
import { ConfigProvider } from "@kapeta/sdk-config";

import { createUsersRouter } from "./proxies/rest/Users-routes";
import { createTodowebRouter } from "./proxies/fragments/Todoweb-routes";

import { createUserwebRouter } from "./proxies/fragments/Userweb-routes";

export const createRoutes = async (config: ConfigProvider): Promise<Router> => {
    const routes = Router();
    routes.use(await createUsersRouter(config));
    routes.use(await createTodowebRouter(config));

    routes.use(await createUserwebRouter(config));
    return routes;
};