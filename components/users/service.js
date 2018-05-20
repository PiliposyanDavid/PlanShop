function UsersService(usersDao) {
    this.insertUser = insertUser;
    this.updateUser = updateUser;
    this.deleteUser = deleteUser;
    this.getUsers = getUsers;

    function getUsers(query) {
        return usersDao.getData(query);
    }

    function insertUser(user) {
        return usersDao.insertData(user);
    }

    function updateUser(id, user) {
        return usersDao.updateData(id, user);
    }

    function deleteUser(id) {
        return usersDao.deleteData(id);
    }
}
module.exports = UsersService;
