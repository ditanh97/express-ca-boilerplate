import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import AuthServices from '../../application/contracts/services/AuthServices.js';
import config from '../../config/config.js';

export default class AuthenticationServices extends AuthServices {

    encryptPassword = (password) => {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    };

    compare = (password, hashedPassword) =>
    bcrypt.compareSync(password, hashedPassword);

    verify = (token) => jwt.verify(token, config.jwtSecret);
    
    generateToken = (payload) =>
    jwt.sign(payload, config.jwtSecret, {
      expiresIn: 360000
    });



};
