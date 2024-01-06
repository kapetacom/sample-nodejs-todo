//
// GENERATED SOURCE - DO NOT EDIT
//
import { Router } from 'express';
import { createProxyRoute, ProxyRouteOptions } from '@kapeta/sdk-proxy-route';
import { ConfigProvider } from '@kapeta/sdk-config';

export const createTodowebRouter = async (provider: ConfigProvider, opts: ProxyRouteOptions = {}) => {
    const router = Router();
    router.use('/todo', await createProxyRoute(provider, 'todoweb', 'web', opts));

    return router;
};
