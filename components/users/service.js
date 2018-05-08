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
                    reject(Utility.GenerateErrorMessage(
                        Utility.ErrorTypes.SEARCH_ERROR));
                });
        });

    }

    insertUser(user) {
        return UsersDao.insertData(user);
    }

    updateUser(id, user) {
        return UsersDao.updateData(id, user);
    }

    deleteUser(id) {
        return UsersDao.deleteData(id);
    }

}


module.exports = new UsersService();
