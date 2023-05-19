/* eslint-disable no-param-reassign */
/* eslint-disable arrow-body-style */

const StudentRepository = require('../../../application/contracts/StudentRepository');

module.exports = class MongoStudentRepository extends StudentRepository {

    constructor(collection, ObjectId) {
        super();
        this.ObjectId = ObjectId;
        this.collection = collection;
    }

    async add(studentInstance) {
        let student = {};
        try {
            student = this.collection.insertOne(studentInstance);
        } catch (error) {
            throw new Error('Error Occurred');
        }

        return student;
    }

    async update(studentInstance) {
        let student;
        // try {
        //     student = this.students.find(x => x.id === studentInstance.id);
        //     if (student) {
        //         Object.assign(student, { studentInstance });
        //     }

        // } catch (error) {
        //     throw new Error('Error Occurred');
        // }

        return student;
    }

    async delete(studentId) {
        // try {
        //     const studentIndex = this.students.findIndex(x => x.id === studentId);
        //     if (studentIndex !== -1) {
        //         this.students.splice(studentIndex, 1);
        //     }
        // } catch (error) {
        //     throw new Error('Error Occurred');
        // }

        return true;
    }

    async getById(studentId) {
        let student;
        try {
            student = this.collection.findOne({ _id: new this.ObjectId(studentId) });
        } catch (err) {
            throw new Error('Error Occurred');
        }

        return student;
    }

    async getByEmail(studentEmail) {
        let student;
        try {
            student = this.collection.findOne({ email: studentEmail });
        } catch (err) {
            throw new Error('Error Occurred');
        }

        return student;
    }

    async getAll() {
        const students = this.collection.find({}).project({
            _id: 0, id: '$_id', email: 1, firstName: 1, lastName: 1, fullName: 1, enrollments: 1
        }).toArray();
        return students;
    }

    async addEnrollment(studentId, enrollment) {
        const student = this.students.findOne({ _id: new this.ObjectId(studentId) });

        // if (!student) {
        //     throw new Error('student does not exist');
        // }

        // if (!student.enrollments) {
        //     student.enrollments = [];
        // }
        // student.enrollments.push(enrollment);

        return student;
    }
};
