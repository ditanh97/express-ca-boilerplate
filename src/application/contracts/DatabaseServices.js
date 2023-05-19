/* eslint-disable class-methods-use-this */
export default class DatabaseServices {

    constructor() {
        this.studentRepository = null;
    }

    initDatabase() {
        return Promise.reject(new Error('not implemented'));
    }

};
