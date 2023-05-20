import express from 'express';
import students from './students.js';
import auth from './auth.js';

const apiRouter = (dependencies) => {
    const routes = express.Router();

    const studentsRouter = students(dependencies);
    const authsRouter = auth(dependencies);

    routes.use('/students', studentsRouter);
    routes.use('/auth',authsRouter);
    return routes;

};


export default apiRouter;
