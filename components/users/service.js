const usersDao = require('./private/mongoDao');
const Utility = require('./../../services/utility');

class UsersService {
    constructor(usersDao) {
        this.
    }

    getUsers(query) {
        return usersDao.getData(query);
    }

    insertUser(user) {
        return usersDao.insertData(user);
    }

    updateUser(id, user) {
        return usersDao.updateData(id, user);
    }

    deleteUser(id) {
        return usersDao.deleteData(id);
    }
}


module.exports = new UsersService();
