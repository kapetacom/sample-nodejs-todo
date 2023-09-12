import Path from 'path';
import { Server } from '@kapeta/sdk-server';
const server = new Server('kapeta/nodejs-sample-user-ui', Path.resolve(__dirname, '../..'));
import { UsersProxyRoute } from './proxies/rest/UsersProxyRoute';

const devMode = process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() === 'development';

server.addRoute(new UsersProxyRoute());

const BASE_DIR = Path.resolve(__dirname, '../../dist');
const webpackConfig = require('../../webpack.development.config');
server.configureAssets(BASE_DIR, webpackConfig);

server.start('web');
