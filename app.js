const express = require('express');

const ApiV1 = require('./controllers/api');

const app = express();

app.set('port', process.env.Port || 3333);
app.use(require('body-parser').urlencoded({
    limit: 1024 * 1024, //1MB
    extended: true
}));
app.use(require('body-parser').json({
    limit: 20 * 1024 * 1024, //20MB
    extended: true
}));
ApiV1.initialize(app);


app.listen(app.get('port'), function () {
    console.log('Server is listening on port ' + app.get('port'));
});
