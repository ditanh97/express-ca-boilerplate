// const mongoose = require('mongoose');
const { MongoClient, ObjectId } = require('mongodb');
const DatabaseServices = require('../../../application/contracts/DatabaseServices');
const MongoStudentRepository = require('./mongoStudentRepository');
const Student = require('../../../entities/Student');

module.exports = class MongoDatabaseServices extends DatabaseServices {
    constructor() {
        super();
        this.studentRepository = undefined;
        this.uri = 'mongodb://127.0.0.1:27017'; // node 17 above use ipv6 instead ipv4, so define localhost as ip
        this.client = new MongoClient(this.uri);
    }

    async initDatabase() {
        console.log('init databse');
        // mongodb://localhost:27017
        // this.seedData();
        await this.client.connect();
        console.log('koneksi berhasil');
        const database = this.client.db('db_node_ca');
        this.studentRepository = new MongoStudentRepository(database.collection('students'), ObjectId);
    }
};
