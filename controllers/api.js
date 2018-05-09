const UsersApi = require('./../components/users/api');
const ShopListApi = require('./../components/shoplists/api');
const ProductsApi = require('./../components/products/api');
const GroupsApi = require('./../components/groups/api');

const UsersDao = require('./../components/users/private/mongoDao');
const ShopListDao = require('./../components/shoplists/private/mongoDao');
const ProductsDao = require('./../components/products/private/mongoDao');
const GroupsDao = require('./../components/groups/private/mongoDao');

class ApiV1 {
    constructor(app) {
        app.use('/api/users', UsersApi);
        app.use('/api/shoplists', ShopListApi);
        app.use('/api/products', ProductsApi);
        app.use('/api/groups', GroupsApi);
        app.get('/', (req, res) => {
            res.send('ApiV1');
        });
    }
}

module.exports = new ApiV1();
