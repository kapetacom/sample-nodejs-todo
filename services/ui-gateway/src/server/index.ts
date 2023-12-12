import Path from "path";
import { Server } from "@kapeta/sdk-server";
const server = new Server(
    "kapeta/sample-nodejs-ui-gateway",
    Path.resolve(__dirname, "../..")
);
import { UsersProxyRoute } from "./.generated/proxies/rest/UsersProxyRoute";
import { TodowebProxyRoute } from "./.generated/proxies/fragments/TodowebProxyRoute";

import { UserwebProxyRoute } from "./.generated/proxies/fragments/UserwebProxyRoute";

server.addRoute(new TodowebProxyRoute());

server.addRoute(new UserwebProxyRoute());
server.addRoute(new UsersProxyRoute());

const BASE_DIR = Path.resolve(__dirname, "../../dist");
const webpackConfig = require("../../webpack.development.config");
server.configureAssets(BASE_DIR, webpackConfig);

server.start("web");
