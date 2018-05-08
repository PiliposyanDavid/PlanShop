const Utility = require('./../../services/utility');

class BaseDao {
    constructor(db) {
        this.db = db;
    }

    getData(query) {
        if (!this.db)
            return (Utility.generateErrorMessage(
                    Utility.ErrorTypes.UNKNOWN_ERROR) //TODO change error type
            );

        query = query || {};
        return this.db.find(query);
    }

    insertData(query) {
        if (!query)
            return (Utility.generateErrorMessage(
                    Utility.ErrorTypes.UNKNOWN_ERROR) //TODO change error type
            );

        return this.db.create(query);
    }

    updateData(id, query) {
        if (!query)
            return (Utility.generateErrorMessage(
                    Utility.ErrorTypes.UNKNOWN_ERROR) //TODO change error type
            );

        console.log(query);
        return this.db.update({_id: id}, {$set: query});
    }

    deleteData(id) {
        return this.db.findOneAndRemove({_id: id});
    }
}

module.exports = BaseDao;
