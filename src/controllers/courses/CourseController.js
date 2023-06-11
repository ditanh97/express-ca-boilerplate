import {
    AddCourse
}from '../../application/use_cases/course/index.js';


export default (dependecies) => {

    const { courseRepository } = dependecies.DatabaseService;

    const addNewCourse = (req, res, next) => {
        // init use case
        const AddStudentCommand = AddCourse(courseRepository);
        // extract student properties
        const { name } = req.body;
        // call use case
        AddStudentCommand.Execute({name}).then((response) => {
            console.log('tessst');
            res.json(response);
        }, (err) => {
            console.log('error', err);
            next(err);
        });
    };
    return {
        addNewCourse,
    };
};
