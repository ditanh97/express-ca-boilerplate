import express from 'express';
import AuthController from '../../../controllers/auth/AuthController.js';

// address - api/auth
// load dependencies
const authRouter = (dependencies) => {
    const router = express.Router();

    // load controller with dependencies
    const controller = AuthController(dependencies);

    router.route('/login')
        .post(controller.loginUser);
    return router;
};


export default authRouter;
