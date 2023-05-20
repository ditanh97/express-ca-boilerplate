import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import config from './config/config.js';
import projectDependencies from './config/projectDependencies.js';
import routes from './frameworks/web/routes/index.js';
import serverConfig from './frameworks/web/server.js';
import expressConfig from './frameworks/web/express.js';
import ErrorHandler from './frameworks/common/ErrorHandler.js';

const app = express();
const server = http.createServer(app);


// load app only if db is alive and kicking
projectDependencies.DatabaseService.initDatabase().then(() => {
    
    // express configuration
    expressConfig(app);


    serverConfig(app, mongoose, server, config).startServer();

    // load routes
    app.use('/api', routes(projectDependencies));

    // generic error handler
    app.use(ErrorHandler);



}, (err) => {
    console.log(`db is not ready, err:${err}`);
});
