const AppConstants = {
    DB_URL: '127.0.0.1:27017/PlanShop',
    LIMIT_DEFAULT_VALUE: 20,
    OFFSET_DEFAULT_VALUE: 0,
    LIST_NAME_MIN_LENGTH: 2,
    LIST_NAME_MAX_LENGTH: 200,
    GROUP_NAME_MIN_LENGTH: 2,
    GROUP_NAME_MAX_LENGTH: 50,
    USERNAME_MIN_LENGTH: 4,
    USERNAME_MAX_LENGTH: 20,
    PASSWORD_MIN_LENGTH: 6,
    PASSWORD_MAX_LENGTH: 80,
    EMAIL_MIN_LENGTH: 2,
    EMAIL_MAX_LENGTH: 25,
    AGE_MIN_LENGTH: 14,
    AGE_MAX_LENGTH: 120,
    NAME_MIN_LENGTH: 1,
    NAME_MAX_LENGTH: 70,
    NUMBER_REG_EXP: /^[+-]?(([0-9])+([.][0-9]*)?|[.][0-9]+)$/,
    SYMBOL_REG_EXP: /^[!@#\$%\^\&*\)\(+=~._-]+$/,
    EMAIL_REG_EXP: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,})+$/
}

module.exports = AppConstants;