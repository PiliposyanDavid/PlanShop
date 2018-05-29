const AppConstants = require('./../../settings/constants');

const Types = {
    STRING: 'string',
    NUMBER: 'number',
    DATE: 'date',
    SYMBOL: 'symbol'
};

class BaseValidator {

    constructor() {
        this.handlers = {};
        this.handlers[Types.STRING] = this._isString;
        this.handlers[Types.NUMBER] = this._isNumber;
        this.handlers[Types.SYMBOL] = this._isSymbol;
        this.handlers[Types.DATE] = this._isDate;
    }

    validator(str, type) {
        if (!this.handlers[type]) return false;

        return this.handlers[type](str);
    }

    _isString(str) {
        if (!str) return false;

        return typeof(str) === 'string';
    }

    _isNumber(str) {
        if (!str) return false;

        return AppConstants.NUMBER_REG_EXP.test(str);
    }

    _isDate(str) {
        if (!str) return false;

        return !!Date.parse(str);
    }

    _isSymbol(str) {
        if (!str) return false;

        return AppConstants.SYMBOL_REG_EXP.test(str);
    }
}

module.exports = BaseValidator;
module.exports.Types = Types;
