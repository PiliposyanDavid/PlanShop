const UsersDao = require('./private/mongoDao');
const Utility = require('./../../services/utility');

class UsersService {
    constructor() {
    }

    getUsers(query) {
        return UsersDao.getData(query);
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
