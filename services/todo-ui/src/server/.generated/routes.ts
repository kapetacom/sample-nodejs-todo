import { Router } from "express";
import { ConfigProvider } from "@kapeta/sdk-config";

import { createTasksRouter } from "./proxies/rest/Tasks-routes";

export const createRoutes = async (config: ConfigProvider): Promise<Router> => {
    const routes = Router();
    routes.use(await createTasksRouter(config));
    return routes;
};
