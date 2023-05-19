import express from 'express';
import bodyParser from 'body-parser';
import routes from './frameworks/web/routes/index.js';
import projectDependencies from './config/projectDependencies.js';
import ErrorHandler from './frameworks/common/ErrorHandler.js';

const app = express();
const port = process.env.PORT || 3000;

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
    app.listen(port, () => console.log(`http://localhost:${port}`));

}, (err) => {
    console.log(`db is not ready, err:${err}`);
});
