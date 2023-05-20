import DatabaseServices from '../../../application/contracts/services/DatabaseServices.js';
import InMemoryStudentRepository from './InMemoryStudentRepository.js';
import Student from '../../../entities/Student.js';

export default class InMemoryDatabaseServices extends DatabaseServices {
    constructor() {
        super();
        this.studentRepository = new InMemoryStudentRepository();
    }

    async initDatabase() {
        this.seedData();
    }

    async seedData() {
        let sampleStudent = new Student({
            firstName: 'royi',
            lastName: 'benita', 
            email: 'royibeni@gmail.com',
            password: 'password123', 
            role:1
        });

        sampleStudent = await this.studentRepository.add(sampleStudent);
        await this.studentRepository.addEnrollment(sampleStudent.id, { course: { id: 1, name: 'math' }, grade: 95 });

    }
};
