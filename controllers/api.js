const UsersDao = require('./../components/users/private/mongoDao');
const ShopListDao = require('./../components/shoplists/private/mongoDao');
const ProductsDao = require('./../components/products/private/mongoDao');
const GroupsDao = require('./../components/groups/private/mongoDao');

const UsersService = require('./../components/users/service');
const ShopListService = require('./../components/shoplists/service');
const ProductsService = require('./../components/products/service');
const GroupsService = require('./../components/groups/service');

module.exports = function (app) {
    const userDao = new UsersDao(app.db1.users);
    const userService = new UsersService(userDao);

    const shoplistDao = new ShopListDao(app.db1);
    const shoplistService = new ShopListService(shoplistDao);

    const productsDao = new ProductsDao(app.db1);
    const productsService = new ProductsService(productsDao);

    const groupsDao = new GroupsDao(app.db1);
    const groupsService = new GroupsService(groupsDao);

    const usersApi = require('./../components/users/api')(userService);
    app.get('/api/users/', usersApi.getOll);
    app.get('/api/users/:id', usersApi.getById);
    app.post('/api/users/:id', usersApi.add);
    app.put('/api/users/:id', usersApi.put);
    app.delete('/api/users/:id', usersApi.remove);

    const shoplistApi = require('./../components/shoplists/api')(shoplistService);
    app.get('/api/shoplists/', shoplistApi.getOll);

    const productsApi = require('./../components/products/api')(productsService);
    app.get('/api/products/', productsApi.getOll);

    const groupsApi = require('./../components/groups/api')(groupsService);
    app.get('/api/groups/', groupsApi.getOll);

    app.get('/', (req, res) => {
        res.send('ApiV1');
    });
};

