const express = require('express');
const bodyParser = require('body-parser';
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const ApiV1 = require('./controllers/api');

const AppConstants = require('settings/constants')

const app = express();

app.set('port', process.env.Port || 3333);
app.use(bodyParser.urlencoded({
    limit: 1024 * 1024, //1MB
    extended: true
}));
app.use(bodyParser.json({
    limit: 20 * 1024 * 1024, //20MB
    extended: true
}));

require('components/users/private/model');
require('components/groups/private/model');
require('components/shoplists/private/model');
require('components/products/private/model');

const db1 = mongoose.createConnection(AppConstants.DB1_URL);

app.db1 = {
    users: db1.model('users'),
    group: db1.model('group'),
    products: db1.model('products'),
    shoplist: db1.model('shoplist'),
    photos: db1.model('photos')
};


ApiV1(app);


app.listen(app.get('port'), function () {
    console.log('Server is listening on port ' + app.get('port'));
});
