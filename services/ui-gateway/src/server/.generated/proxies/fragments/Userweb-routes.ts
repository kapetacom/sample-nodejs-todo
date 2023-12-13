//
// GENERATED SOURCE - DO NOT EDIT
//
import { Router } from "express";
import { createProxyRoute } from "@kapeta/sdk-proxy-route";
import { ConfigProvider } from "@kapeta/sdk-config";

export const createUserwebRouter = async (provider: ConfigProvider) => {
    const router = Router();
    router.use(
        "/fragments/user",
        await createProxyRoute(provider, "userweb", "web")
    );

    return router;
};
