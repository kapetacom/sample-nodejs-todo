//
// GENERATED SOURCE - DO NOT EDIT
//
import { Router } from 'express';
import { createProxyRoute, ProxyRouteOptions } from '@kapeta/sdk-proxy-route';
import { ConfigProvider } from '@kapeta/sdk-config';

export const createUserwebRouter = async (provider: ConfigProvider, opts: ProxyRouteOptions = {}) => {
    const router = Router();
    router.use('/user', await createProxyRoute(provider, 'userweb', 'web', opts));

    return router;
};
