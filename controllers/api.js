const UsersApi = require('./../components/users/api');
const ShopListApi = require('./../components/shoplists/api');
const ProductsApi = require('./../components/products/api');
const GroupsApi = require('./../components/groups/api');

class ApiV1 {
    initialize(app) {
        app.use('/api/users', UsersApi);
        app.use('/api/shoplists', ShopListApi);
        app.use('/api/products', ProductsApi);
        app.use('/api/groups', GroupsApi);
        app.get('/', (req, res) => {
            res.send('works');
        });
    }
}

module.exports = new ApiV1();
