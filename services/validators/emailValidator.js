const BaseValidator = require('./base');
const Utility = require('./../utility');
const AppConstants = require('./../../settings/constants');

class EmailValidator extends BaseValidator {
    constructor() {
        super();
    }

    validator(email) {
        if (!email) return false;

        if (!super.validator(email, BaseValidator.Types.STRING)) return false;

        return AppConstants.EMAIL_REG_EXP.test(email);
    }
}

module.exports = new EmailValidator();
