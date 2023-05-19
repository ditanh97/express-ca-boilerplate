const mongoose = require('mongoose');

const DatabaseServices = require('../../../application/contracts/DatabaseServices');
const MongoStudentRepository = require('./repositories/student');


module.exports = class MongoDatabaseServices extends DatabaseServices {
    constructor() {
        super();
        this.mongo = {
            uri: 'mongodb://127.0.0.1:27017/db_node_ca',
            options: {
                autoIndex: false,
                useNewUrlParser: true,
                connectTimeoutMS: 1000
            }
        }; // node 17 above use ipv6 instead ipv4, so define localhost as ip
        this.studentRepository = new MongoStudentRepository();


    }

    async initDatabase() {
        mongoose
            .connect(this.mongo.uri, this.mongo.options)
            .then(
                () => {
                    console.log('Connectttt');
                },
                (err) => {
                    console.info('Mongodb error rerere', err);
                }
            )
            .catch((err) => {
                console.log('erorrr loggg:', err);
            });

    }
};
