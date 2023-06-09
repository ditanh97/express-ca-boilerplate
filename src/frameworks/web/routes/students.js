import express from 'express';
import StudentController from '../../../controllers/students/StudentController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

// address - api/students
// load dependencies
const studentsRouter = (dependencies) => {
    const router = express.Router();

    // load controller with dependencies
    const controller = StudentController(dependencies);

    router.route('/')
        .get(authMiddleware, controller.getAllStudents)
        .post(controller.addNewStudent);
    router.route('/:studentId')
        .get(controller.getStudent);
    router.route('/enrollment/:studentId')
        .post(controller.addEnrollment);
    return router;
};


export default studentsRouter;
