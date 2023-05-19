import CrmServices from '../../application/contracts/CrmServices.js';

export default class UniversityCrmServices extends CrmServices {

    notify(studentDetails) {
        return Promise.resolve('external crm system was notified');
    }

};
