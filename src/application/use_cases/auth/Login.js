const Login = (StudentRepository, AuthService) => {
    async function Execute({email, password}){
        if (!email || !password) {
          const error = new Error('email and password fields cannot be empty');
          error.statusCode = 401;
          throw error;
        }
        const student = await StudentRepository.getByEmail(email);
        if(!student) {
            const error = new Error('Invalid email or password');
            error.statusCode = 401;
            throw error;
        }
        const isMatch = AuthService.compare(password, student.password);
        if (!isMatch) {
          const error = new Error('Invalid email or password');
          error.statusCode = 401;
          throw error;
        }
        const payload = {
          user: {
            id: student._id
          }
        };
        return AuthService.generateToken(payload);
    }
    return {
        Execute
    }
}
export default Login;