const InMemoryDatabaseServices = require('../frameworks/persistance/InMemory/InMemoryDatabaseServices');
const MongoDatabaseServices = require('../frameworks/persistance/mongo/connection');
const UniversityCrmServices = require('../frameworks/externalServices/UniversityCrmServices');

module.exports = (() => {
    return {
        // DatabaseService: new InMemoryDatabaseServices(),
        DatabaseService: new MongoDatabaseServices(),
        CrmServices: new UniversityCrmServices()
    };
})();
