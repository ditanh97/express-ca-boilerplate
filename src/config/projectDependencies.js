import InMemoryDatabaseServices from '../frameworks/persistance/InMemory/InMemoryDatabaseServices.js';
import MongoDatabaseServices from '../frameworks/persistance/mongo/connection.js';
import UniversityCrmServices from '../frameworks/externalServices/UniversityCrmServices.js';

export default (() => {
    return {
        // DatabaseService: new InMemoryDatabaseServices(),
        DatabaseService: new MongoDatabaseServices(),
        CrmServices: new UniversityCrmServices()
    };
})();
