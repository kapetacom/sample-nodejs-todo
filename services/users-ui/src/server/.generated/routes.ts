import { Router } from "express";
import { ConfigProvider } from "@kapeta/sdk-config";

import { createUsersRouter } from "./proxies/rest/Users-routes";

export const createRoutes = async (config: ConfigProvider): Promise<Router> => {
    const routes = Router();
    routes.use(await createUsersRouter(config));
    return routes;
};
