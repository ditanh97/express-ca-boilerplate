import Login from "../../application/use_cases/auth/login.js";


export default (dependencies) => {

    const { studentRepository } = dependencies.DatabaseService;
    const { AuthService } = dependencies;

    const loginUser = (req, res, next) => {
        // init use case
        const LoginCommand = Login(studentRepository, AuthService);
        // extract student properties
        const { email, password } = req.body;
        // call use case
        LoginCommand.Execute({ email, password}).then((response) => {
            res.json(response);
        }, (err) => {
            console.log('error disini', err);
            next(err);
        });
    };

    return {
        loginUser
    };
};
