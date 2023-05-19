import DatabaseServices from '../../../application/contracts/DatabaseServices.js';
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
        let sampleStudent = new Student('royi', 'benita', 'royibeni@gmail.com');

        sampleStudent = await this.studentRepository.add(sampleStudent);
        await this.studentRepository.addEnrollment(sampleStudent.id, { course: { id: 1, name: 'math' }, grade: 95 });

    }
};
