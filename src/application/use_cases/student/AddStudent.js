import Student from '../../../entities/Student.js';

const AddStudent = (StudentRepository, CrmServices, AuthService) => {

    async function Execute({firstName, lastName, email, password, role}) {
        const student = await StudentRepository.getByEmail(email);

        // validate
        if (!firstName || !lastName || !email || !password) {
            throw new Error('validation failed');
        }

        // check if student exist by email
        if (student) {
            throw new Error('email already exist in the system');
        }

        // create new student object
        let newStudent = new Student({
            firstName, 
            lastName, 
            email, 
            password: AuthService.encryptPassword(password), 
            role
        });

        // persist student
        newStudent = await StudentRepository.add(newStudent);
        // notify crm system
        await CrmServices.notify({id: newStudent._id});

        return {id: newStudent._id};
    }
    return {
        Execute
    };
};
export {AddStudent};