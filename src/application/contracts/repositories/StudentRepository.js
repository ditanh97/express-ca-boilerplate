/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
export default class StudentRepository {
    constructor() { }

    add(studentInstance) {
        return Promise.reject(new Error('not implemented'));
    }

    update(studentInstance) {
        return Promise.reject(new Error('not implemented'));
    }

    delete(studentInstance) {
        return Promise.reject(new Error('not implemented'));
    }

    getById(StudentId) {
        return Promise.reject(new Error('not implemented'));
    }

    getByEmail(StudentEmail) {
        return Promise.reject(new Error('not implemented'));
    }

    getByProperty(params) {
        return Promise.reject(new Error('not implemented'));
    }

    getAll() {
        return Promise.reject(new Error('not implemented'));
    }

    addEnrollment(studentInstance, enrollment) {
        return Promise.reject(new Error('not implemented'));
    }
};
