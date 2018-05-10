const crypto = require('crypto');
const UserValidator = require('./../../services/validators/userValidator');
const EmailValidator = require('./../../services/validators/emailValidator');
const Utility = require('./../../services/utility');
const AppConstants = require('./../../settings/constants');

module.exports = (usersService) => {
    return {
        add,
        getOll,
        getById,
        put,
        remove
    };

    function add(req, res, next) {

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
        usersService.insertUser(user).then((data) => {
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
    }

    function getOll(req, res, next) {
        usersService.getUsers().then((data) => {
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

    }

    function getById(req, res, next) {

        usersService.getUsers({id: +req.params.id}).then((data) => {
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
    }

    function put(req, res, next) {

        usersService.getUsers({id: +req.params.id}).then((data) => {
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

    }

    function remove(req, res, next) {

        if (!req.params.id) {
            return res.send({
                message: 'error',
                err_type: Utility.GenerateErrorMessage(Utility.ErrorTypes.EMPTY_ID_DELETE)
            });
        }
        usersService.deleteUser(+req.params.id).then((_) => {
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
    }
};
