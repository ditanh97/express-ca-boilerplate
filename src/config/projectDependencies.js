import InMemoryDatabaseServices from '../frameworks/persistance/InMemory/InMemoryDatabaseServices.js';
import MongoDatabaseServices from '../frameworks/persistance/mongo/connection.js';
import UniversityCrmServices from '../frameworks/externalServices/UniversityCrmServices.js';
import AuthenticationServices from '../frameworks/internalServices/AuthenticationServices.js';

export default (() => {
    return {
        // DatabaseService: new InMemoryDatabaseServices(),
        DatabaseService: new MongoDatabaseServices(),
        CrmServices: new UniversityCrmServices(),
        AuthService: new AuthenticationServices()
    };
})();
