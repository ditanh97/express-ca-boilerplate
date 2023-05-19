import UserModel from '../models/student.js';
import StudentRepository from '../../../../application/contracts/StudentRepository.js';

export default class MongoStudentRepository extends StudentRepository {
    // const findByProperty = (params) => {
    //     return UserModel.find(omit(params, 'page', 'perPage'))
    //         .skip(params.perPage * params.page - params.perPage)
    //         .limit(params.perPage);
    // };

    // const countAll = (params) => { return UserModel.countDocuments(omit(params, 'page', 'perPage')); };
    async getAll() {
        const student = UserModel.find({});
        return student;
        // .project({
        //     _id: 0, id: '$_id', email: 1, firstName: 1, lastName: 1, fullName: 1, enrollments: 1
        // }).toArray()


    }

    async getByEmail(studentEmail) { return UserModel.findOne({ email: studentEmail }); }

    async getById(studentId) {
        const student = UserModel.findById(studentId);
        console.log('studeeent', student);
        return student;
    }

    async add(studentInstance) {
        const newStudent = new UserModel(studentInstance);
        return newStudent.save();
    }

};
