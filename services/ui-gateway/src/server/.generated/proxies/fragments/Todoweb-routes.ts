//
// GENERATED SOURCE - DO NOT EDIT
//
import { Router } from "express";
import { createProxyRoute } from "@kapeta/sdk-proxy-route";
import { ConfigProvider } from "@kapeta/sdk-config";

export const createTodowebRouter = async (provider: ConfigProvider) => {
    const router = Router();
    router.use(
        "/fragments/todo",
        await createProxyRoute(provider, "todoweb", "web")
    );

    return router;
};
