/* eslint-disable class-methods-use-this */
export default class AuthServices {

    encryptPassword(password) {
        return Promise.reject(new Error('not implemented'));
    }
    compare(password, hashedPassword) {
        return Promise.reject(new Error('not implemented'));
    }
    verify(token) {
        return Promise.reject(new Error('not implemented'));
    }
    generateToken(payload) {
        return Promise.reject(new Error('not implemented'));
    }
};
