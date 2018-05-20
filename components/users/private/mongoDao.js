const BaseDao = require('./../../core/BaseDao');

class UsersDao extends BaseDao {
    constructor(db) {
        super(db);
        this.db = db;
    }

    getUserById() {

    }

    getCollection() {
        return this.db;
    }
}

module.exports =  UsersDao;
