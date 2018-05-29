class BaseDao {
    constructor(db) {
        this.db = db;
    }

    getData(query) {
        query = query || {};
        return this.db.find(query);
    }

    insertData(query) {
        return this.db.create(query);
    }

    updateData(id, query) {
        return this.db.update({_id: id}, {$set: query});
    }

    deleteData(id) {
        return this.db.findOneAndRemove({_id: id});
    }
}

module.exports = BaseDao;
