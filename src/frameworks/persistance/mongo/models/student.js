import mongoose from'mongoose';

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    firstName: {
        type: String,
        unique: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    }
});


const UserModel = mongoose.model('students', UserSchema);


export default UserModel;
