export default (StudentRepository) => {

    async function Execute(studentId) {
        return StudentRepository.getById(studentId);
    }

    return {
        Execute
    };
};
