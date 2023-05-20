import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import config from './config/config.js';
import projectDependencies from './config/projectDependencies.js';
import routes from './frameworks/web/routes/index.js';
import WebServer from './frameworks/web/server.js';
import ErrorHandler from './frameworks/common/ErrorHandler.js';

const app = express();
const server = http.createServer(app);


// load app only if db is alive and kicking
projectDependencies.DatabaseService.initDatabase().then(() => {

    // load middlewares
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // load routes
    app.use('/api', routes(projectDependencies));

    // generic error handler
    app.use(ErrorHandler);

    // eslint-disable-next-line arrow-body-style
    WebServer(app, mongoose, server, config).startServer();


}, (err) => {
    console.log(`db is not ready, err:${err}`);
});
