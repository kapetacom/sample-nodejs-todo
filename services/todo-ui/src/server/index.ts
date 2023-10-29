/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import Path from 'path';
import { Server } from '@kapeta/sdk-server';
const server = new Server('kapeta/nodejs-sample-todo-ui', Path.resolve(__dirname, '../..'));
import { TasksProxyRoute } from './proxies/rest/TasksProxyRoute';

const devMode = process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() === 'development';

server.addRoute(new TasksProxyRoute());

const BASE_DIR = Path.resolve(__dirname, '../../dist');
const webpackConfig = require('../../webpack.development.config');
server.configureAssets(BASE_DIR, webpackConfig);

server.start('web');
