//
// GENERATED SOURCE - DO NOT EDIT
//
const Server = require("@blockware/server");

const UsersRoute = require("./src/rest/UsersRoute");
const UsersRouteService = require("./src/service/UsersRouteService");

const server = new Server("Users");

server.addRESTRoute(new UsersRoute(new UsersRouteService()));

server.start();
