const UsersDao = require('./private/mongoDao');
const Utility = require('./../../services/utility');

class UsersService {
    constructor() {
    }

    getUsers() {
        return new Promise((resolve, reject) => {
            //options = options || {};
            return UsersDao.getData()
                .then(data => {
                    resolve(data);
                }).catch(err => {
                    reject(Utylity.GenerateErrorMessage(
                        Utylity.ErrorTypes.SEARCH_ERROR));
                });
        });

    }

    insertUser(user) {
        return UsersDao.insertData(user);
    }

    updateUser(id, user) {
        UsersDao.updateData(id, user);
    }


    deleteUsers(id) {
        return new Promise((resolve, reject) => {
            UsersDao.deleteData(id)
                .then(data => {
                    resolve(data);
                }).catch(err => {
                reject(Utylity.GenerateErrorMessage(
                    Utylity.ErrorTypes.ERROR_IN_DELETING));
            });
        });
    }

}


module.exports = new UsersService();
