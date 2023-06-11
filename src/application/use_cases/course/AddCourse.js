import Course from '../../../entities/Course.js';

const AddCourse = (courseRepository) => {

    async function Execute({name}) {
        const course = await courseRepository.findOne(name);

        // validate
        if (course) {
            throw new Error('Course already exist in the system');
        }

        // persist student
        newCourse = await courseRepository.add(name);

        return {id: newCourse._id};
    }
    return {
        Execute
    };
};
export {AddCourse};