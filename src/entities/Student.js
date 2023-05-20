export default class Student {
    constructor({firstName, lastName, email, password,role,enrollments}) {
        this.id = null;
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${firstName} ${lastName}`;
        this.email = email;
        this.password = password;
        this.role = role;
        this.enrollments = enrollments;
    }
};
