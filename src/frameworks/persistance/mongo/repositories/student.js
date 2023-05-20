import UserModel from '../models/student.js';
import StudentRepository from '../../../../application/contracts/repositories/StudentRepository.js';

export default class MongoStudentRepository extends StudentRepository {
    async getAll() {
        const student = UserModel.find({}).select('-password');
        return student;
    }

    async getByEmail(studentEmail) { return UserModel.findOne({ email: studentEmail }); }

    async getByProperty(params) {return UserModel.findOne({params});}

    async getById(studentId) {
        const student = UserModel.findById(studentId).select('-password');
        console.log('studeeent', student);
        return student;
    }

    async add(studentInstance) {
        const newStudent = new UserModel(studentInstance);
        return newStudent.save();
    }

};
