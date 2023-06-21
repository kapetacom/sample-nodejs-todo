import Path from "path";
import FS from "fs";
import { Server } from "@kapeta/sdk-server";
const server = new Server(
    "kapeta/sample-nodejs-ui-gateway",
    Path.resolve(__dirname, "../..")
);
import express from "express";
import history from "connect-history-api-fallback";
import { UsersProxyRoute } from "./proxies/rest/UsersProxyRoute";
import { TodowebProxyRoute } from "./proxies/fragments/TodowebProxyRoute";

import { UserwebProxyRoute } from "./proxies/fragments/UserwebProxyRoute";

const devMode =
    process.env.NODE_ENV &&
    process.env.NODE_ENV.toLowerCase() === "development";

server.addRoute(new TodowebProxyRoute());

server.addRoute(new UserwebProxyRoute());
server.addRoute(new UsersProxyRoute());

const BASE_DIR = Path.resolve(__dirname, "../../dist");
const webpackConfig = require("../../webpack.development.config");
server.configureAssets(BASE_DIR, webpackConfig);

server.start("web");
