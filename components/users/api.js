const express = require('express');
const UsersRouter = express.Router();
const crypto = require('crypto');
const UserValidator = require('./../../services/validators/userValidator');
const EmailValidator = require('./../../services/validators/emailValidator');
const Utility = require('./../../services/utility');
const AppConstants = require('./../../settings/constants');
const UsersService = require('./service');

//GET
UsersRouter.get('/', (req, res) => {
    UsersService.getUsers().then((data) => {
        return res.send({
            message: 'success',
            user_data: data
        });
    }).catch((err) => {
        return res.send({
            message: 'error',
            err_type: err,
            reason: Utility.GenerateErrorMessage(Utility.ErrorTypes.SEARCH_ERROR)
        });
    });
});

UsersRouter.get('/:id', (req, res) => {
    UsersService.getUsers({id: +req.params.id}).then((data) => {
        return res.send({
            message: 'success',
            user_data: data
        });
    }).catch((err) => {
        return res.send({
            message: 'error',
            err_type: err,
            reason: Utility.GenerateErrorMessage(Utility.ErrorTypes.SEARCH_ERROR)
        });
    });
});

//POST
UsersRouter.post('/', (req, res) => {

    let username = req.body.username,
        password = req.body.password,
        name = req.body.name,
        email = req.body.email,
        age = req.body.age;


    let username_response = UserValidator.validateUsername(username);
    if (username_response !== Utility.ErrorTypes.SUCCESS)
        return res.send({
            message: 'error',
            err_type: Utility.GenerateErrorMessage(Utility.ErrorTypes.username_response)
        });

    let password_response = UserValidator.validatePassword(password);
    if (password_response !== Utility.ErrorTypes.SUCCESS)
        return res.send({
            message: 'error',
            err_type: Utility.GenerateErrorMessage(Utility.ErrorTypes.password_response)
        });


    let name_response = UserValidator.validateName(name);
    if (name_response !== Utility.ErrorTypes.SUCCESS)
        return res.send({
            message: 'error',
            err_type: Utility.GenerateErrorMessage(Utility.ErrorTypes.name_response)
        });


    if (age < AppConstants.AGE_MIN_LENGTH || age > AppConstants.AGE_MAX_LENGTH)
        return res.send({
            message: 'error',
            err_type: Utility.GenerateErrorMessage(Utility.ErrorTypes.INVALID_AGE_RANGE)
        });


    if (EmailValidator.validator(email) === false)
        return res.send({
            message: 'error',
            err_type: Utility.GenerateErrorMessage(Utility.ErrorTypes.EMAIL_ERROR)
        });

    password = crypto.createHash('md5').update(password + username).digest('hex');
    let user = {
        username: username,
        password: password,
        name: name,
        email: email,
        age: age
    };
    UsersService.insertUser(user).then((data) => {
        return res.send({
            message: 'success',
            user_data: data
        });
    }).catch((err) => {
        return res.send({
            message: 'error',
            reason: Utility.GenerateErrorMessage(Utility.ErrorTypes.ERROR_CREATION_USER),
            err_type: err
        });
    });
});

UsersRouter.put('/:id', (req, res) => {

    let user = {};
    if (req.body.username)
        user.username = req.body.username;

    if (req.body.name)
        user.name = req.body.name;

    if (req.body.age)
        user.age = req.body.age;

    if (req.body.email)
        user.email = req.body.email;

    let username_response = UserValidator.validateUsername(user.username);
    if (username_response !== Utility.ErrorTypes.SUCCESS)
        return res.send(Utility.GenerateErrorMessage(Utility.ErrorTypes.username_response));

    let name_response = UserValidator.validateName(user.name);
    if (name_response !== Utility.ErrorTypes.SUCCESS)
        return res.send({
            message: 'error',
            err_type: Utility.GenerateErrorMessage(Utility.ErrorTypes.name_response)
        });

    if (user.age < AppConstants.AGE_MIN_LENGTH || user.age > AppConstants.AGE_MAX_LENGTH)
        return res.send({
            message: 'error',
            err_type: Utility.GenerateErrorMessage(Utility.ErrorTypes.INVALID_AGE_RANGE)
        });

    if (EmailValidator.validator(user.email) === false)
        return res.send({
            message: 'error',
            err_type: Utility.GenerateErrorMessage(Utility.ErrorTypes.EMAIL_ERROR)
        });

    UsersService.updateUser(+req.params.id, user).then(data => {
        return res.send({
            message: 'success',
            user_data: data
        });
    }).catch((err) => {
        return res.send({
            message: 'error',
            reason: Utility.GenerateErrorMessage(Utility.ErrorTypes.USER_UPDATE_ERROR),
            err_type: err
        });
    });
});

UsersRouter.delete('/:id', (req, res) => {
    if (!req.params.id) {
        return res.send({
            message: 'error',
            err_type: Utility.GenerateErrorMessage(Utility.ErrorTypes.EMPTY_ID_DELETE)
        });
    }
    UsersService.deleteUser(+req.params.id).then((_) => {
        return res.send({
            message: 'success'
        }).catch((err) => {
            return res.send({
                message: 'error',
                reason: Utility.GenerateErrorMessage(Utility.ErrorTypes.ERROR_IN_DELETING),
                err_type: err
            });
        });
    });
});

module.exports = UsersRouter;
