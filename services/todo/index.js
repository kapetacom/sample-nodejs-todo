//
// GENERATED SOURCE - DO NOT EDIT
//
const Server = require("@blockware/sdk-server");

const TasksRoute = require("./src/rest/TasksRoute");
const TasksRouteService = require("./src/service/TasksRouteService");

const server = new Server("Todo");

server.addRESTRoute(new TasksRoute(new TasksRouteService()));

server.start();
