const AppConstants = require('./../settings/constants');

const ErrorTypes = {
    VALIDATION_ERROR: 'validation_error',
    SEARCH_ERROR: 'searching error',
    USER_EXISTS: 'user exists',
    SUCCESS: 'SUCCESS',
    USERNAME_PASS_MISSING: 'username pass missing',
    USERNAME_INVALID_RANGE: 'USERNAME_INVALID_RANGE',
    PASSWORD_INVALID_RANGE: 'PASSWORD_INVALID_RANGE',
    ERROR_CREATION_USER: 'error creation user',
    HAVE_USER: 'have user in this username',
    INVALID_NAME_RANGE: 'invalid range for name',
    NAME_MISSING: 'name missing',
    INVALID_AGE_RANGE: 'invalid range for age',
    ERROR_IN_DELETING: 'error in deleting',
    EMPTY_ID_DELETE: 'empty id in delete',
    EMPTY_ID_FOUND: 'empty id in update',
    EMAIL_ERROR: 'invalid email',
    PRODUCT_REPEAT: 'product repead',
    USER_UPDATE_ERROR: 'error in user update',
    ERROR_IMPORTANCE: 'error importance',
    ERROR_PRODUCTS_GROUP: 'error products group',
    ERROR_IN_PRODUCT_DELETING: 'error in product deleting',
    ERROR_IN_DELETING_PRODUCT: 'error in deleting product',
    ISDELETED_ERROR: 'isDeleted error',
    ERROR_CREATION_PRODUCT: 'error creation product',
    PERMISSION_DENIED: ' permission denied',
    NO_SUCH_PRODUCT_UPDATE: 'no such product update',
    PRODUCTS_EXISTS: 'products exist',
    PRODUCTS_UPDATE_ERROR: 'products update error',
    EMPTY_PRODUCTS_DELETE: 'empty products delete',
    LIST_REPEAT: 'list is repeat',
    SHOPLIST_ERROR: 'shop list error',
    ERROR_CREATION_SHOPLIST: 'error creation shoplist',
    EMPTY_SHOPLIST_DELETE: 'empty shoplist delete',
    ERROR_IN_SHOPLIST_DELETING: 'error in shoplist deleting',
    IS_NOT_ACTIVE: 'is not activ',
    SHOPLIST_UPDATE_ERROR: 'shoplist update error',
    ERROR_FINDING_SHOPLIST: 'error finding shoplist',
    ERROR_IN_FINDING_PHOTO_DELETING: 'error in finding photos',
    INVALID_LIST_NAME_LENGTH: 'invalid list name length',
    INVALID_GROUP_NAME_LENGTH: 'invalid group name range',
    ERROR_CREATION_GROUP: ' error in creation group',
    EMPTY_GROUP_DELETE: 'empty group deleting',
    ERROR_IN_GROUP_DELETING: 'error in deleting group',
    NO_SUCH_GROUP_UPDATE: 'no such group to update',
    GROUP_UPDATE_ERROR: 'group update error',
    ERROR_FINDING_GROUP: 'error in finding group',
    NO_GROUP: 'no group',
    NO_PHOTO: 'no photo',
    NO_PHOTOS_TYPE: 'no photos type',
    UNKNOWN_ERROR: 'unknown_error',
    QUERY_SUCCEEDED: 'query_succeeded',
    USER_DOESNT_EXIST: 'user_doesnt_exist',
    USERNAME_OR_PASSWORD_INCORRECT: 'username_or_password_incorrect',
    PASSWORD_INCORRECT: 'password_incorrect',
    NAME_FORMAT_INCORRECT: 'name_format_incorrect',
    EMAIL_FORMAT_INCORRECT: 'email_format_incorrect',
    PASSWORD_FORMAT_INCORRECT: 'password_format_incorrect',
    USERNAME_ALREADY_EXISTS: 'username_already_exist',
    USERNAME_OFFENSIVE: 'username_offensive',
    INVALID_PHONE_NUMBER: 'phone_number_incorrect',
    PHONE_NUMBER_EXISTS: 'phone_number_exists',
    AUTHORIZATION_CODE_INVALID: 'authorization_code_incorrect',
    EMAIL_ALREADY_EXISTS: 'email_already_exist',
    INVALID_EMAIL: 'invalid_email',
    FILE_NOT_PROVIDED: 'file_not_provided',
    FILE_CORRUPTED: 'file_corrupted',
    USERNAME_REQUIRED: 'username_required',
    FILE_UPLOAD_ERROR: 'file_upload_error',
    USER_NOT_FOUND: 'user_not_found',
    PHOTO_NOT_FOUND: 'photo_not_found',
    USER_FOLLOWING_MAXIMUM_REACHED: 'max_follow_count_reached',
    USERNAME_FORMAT_INCORRECT: 'username_format_incorrect',
    NOT_PERMITTED: 'not_permitted',
    USER_ACTION_BLOCKED: 'user_action_blocked',
    PA_USER_BLOCK_ERROR: "blocking_pa_user",
    UNSUPPORTED_OPERATION: '',
    INVALID_PHOTO_TITLE: '',
    DB_SAVE_ERROR: 'db_save_error',
    RESOURCE_NOT_FOUND: 'resource_not_found',
    RESOURCE_ALREADY_EXISTS: 'resource_already_exists',
    UPLOAD_ERROR: 'upload_error',
    INVALID_FB_TOKEN: 'invalid_fb_token',
    USERNAME_LENGTH_INCORRECT: 'username_length_incorrect',
    INVALID_PURCHASE_DATA: 'invalid_purchase_data',
    UNKNOWN_LOCATION: 'unknown_location',
    WRONG_PURCHASE_ACCESS: 'wrong_purchase_access',
    MESSAGING_CHANNEL_ERROR: 'messaging_channel_error',
    MESSAGING_MESSAGE_ERROR: 'messaging_message_error',
    MESSAGING_CHANNEL_INFO_ERROR: 'messaging_channel_info_error',
    MESSAGING_CHANNEL_REMOVE_ERROR: 'messaging_channel_remove_error',
    INVALID_AGE_ERROR: 'invalid_age_error',
    DATE_FORMAT_ERROR: 'date_format_error',
    LIFTIGNITER_SERVICE_ERROR: 'liftigniter_service_error',
    MICROSOFT_VISION_ERROR: 'microsoft_vision_error',
    TAGS_REQUIRED: 'tags_required',
    USER_ACTIVATION_EXPIRED: 'user_activation_expired',
    SUBSCRIPTION_ERROR: 'subscription_error',
    INVALID_ARGUMENTS: 'invalid_arguments'
};

class Utility {
    static parseQuery(req, res, next) {
        req.query.offset = parseInt(req.query.offset);
        if (!isFinite(req.query.offset)) {
            req.query.offset = AppConstants.OFFSET_DEFAULT_VALUE;
        }
        req.query.limit = parseInt(req.query.limit);
        if (!isFinite(req.query.limit)) {
            req.query.limit = AppConstants.LIMIT_DEFAULT_VALUE;
        }
        next();
    }

    static GenerateErrorMessage(type, options) {
        let error_object = {
            type: type || ErrorTypes.UNKNOWN_ERROR,
            message: 'Something went wrong'
        };

        switch (type) {
            case ErrorTypes.USER_DOESNT_EXIST:
                error_object.message = 'Incorrect username';
                break;
            case ErrorTypes.USERNAME_OR_PASSWORD_INCORRECT:
                error_object.message = 'Username or password incorrect';
                break;
            case ErrorTypes.PASSWORD_INCORRECT:
                error_object.message = 'Incorrect password';
                break;
            case ErrorTypes.NAME_FORMAT_INCORRECT:
                error_object.message = 'Name format is incorrect';
                break;
            case ErrorTypes.EMAIL_FORMAT_INCORRECT:
                error_object.message = 'E-mail format is incorrect';
                break;
            case ErrorTypes.PASSWORD_FORMAT_INCORRECT:
                error_object.message = 'Password is too long';
                break;
            case ErrorTypes.USERNAME_ALREADY_EXISTS:
                error_object.message = 'Username already exists';
                break;
            case ErrorTypes.USERNAME_OFFENSIVE:
                error_object.message = 'Username contains offensive words';
                break;
            case ErrorTypes.EMAIL_ALREADY_EXISTS:
                error_object.message = 'E-mail address is already registered';
                break;
            case ErrorTypes.FILE_NOT_PROVIDED:
                error_object.message = 'File not provided';
                break;
            case ErrorTypes.FILE_CORRUPTED:
                error_object.message = 'File is corrupted';
                break;
            case ErrorTypes.FILE_UPLOAD_ERROR:
                error_object.message = 'Upload error';
                break;
            case ErrorTypes.INVALID_FB_TOKEN:
                error_object.message = 'Invalid facebook token';
                break;
            case ErrorTypes.USER_NOT_FOUND:
                error_object.message = 'User not found';
                break;
            case ErrorTypes.PHOTO_NOT_FOUND:
                error_object.message = 'Photo not found';
                break;
            case ErrorTypes.USERNAME_FORMAT_INCORRECT:
                error_object.message = 'Username format is incorrect';
                break;
            case ErrorTypes.INVALID_EMAIL:
                error_object.message = 'Invalid e-mail address';
                break;
            case ErrorTypes.PHONE_NUMBER_EXISTS:
                error_object.message = 'Phone number is already exists';
                break;
            case ErrorTypes.INVALID_PHONE_NUMBER:
                error_object.message = 'Phone number format is incorrect';
                break;
            case ErrorTypes.AUTHORIZATION_CODE_INVALID:
                error_object.message = 'Authorization code is incorrect';
                break;
            case ErrorTypes.USER_FOLLOWING_MAXIMUM_REACHED:
                error_object.message = 'You cannot follow any more users';
                break;
            case ErrorTypes.USERNAME_REQUIRED:
                error_object.message = 'Username is required';
                break;
            case ErrorTypes.NOT_PERMITTED:
                error_object.message = 'Operation is not permitted';
                break;
            case ErrorTypes.USER_ACTION_BLOCKED:
                error_object.message = 'This user has blocked you';
                break;
            case ErrorTypes.UNSUPPORTED_OPERATION:
                error_object.message = "Operation isn't supported";
                break;
            case ErrorTypes.INVALID_PHOTO_TITLE:
                error_object.message = "Photo title is invalid";
                break;
            case ErrorTypes.MESSAGING_CHANNEL_ERROR:
                error_object.message = "Can not create channel";
                break;
            case ErrorTypes.MESSAGING_MESSAGE_ERROR:
                error_object.message = "Can not create message";
                break;
            case ErrorTypes.INVALID_AGE_ERROR:
                error_object.message = "You have to be over 13";
                break;
            case ErrorTypes.TAGS_REQUIRED:
                error_object.message = "Tags are required";
                break;
            case ErrorTypes.DB_SAVE_ERROR:
                error_object.message = 'Database save failed';
                break;
            case ErrorTypes.RESOURCE_NOT_FOUND:
                error_object.message = "Resource not found";
                break;
            case ErrorTypes.RESOURCE_ALREADY_EXISTS:
                error_object.message = 'Resource already exists';
                break;
            case ErrorTypes.UPLOAD_ERROR:
                error_object.message = 'Upload error.';
                break;
            case ErrorTypes.USERNAME_LENGTH_INCORRECT:
                error_object.message = 'Username is too long';
                break;
            case ErrorTypes.UNKNOWN_LOCATION:
                error_object.message = 'Failed to resolve location';
                break;
            case ErrorTypes.INVALID_PURCHASE_DATA:
                error_object.message = 'Invalid purchase data.';
                break;
            case ErrorTypes.MESSAGING_CHANNEL_INFO_ERROR:
                error_object.message = 'Unable to get channel info';
                break;
            case ErrorTypes.MESSAGING_CHANNEL_REMOVE_ERROR:
                error_object.message = 'Unable to remove channel.';
                break;
            case ErrorTypes.USER_ACTIVATION_EXPIRED:
                error_object.message = "Activation has been expired";
                break;
            case ErrorTypes.PA_USER_BLOCK_ERROR:
                error_object.message = 'You can\'t block this user';
                break;
            case ErrorTypes.DATE_FORMAT_ERROR:
                error_object.message = 'Date format is incorrect';
                break;
            case ErrorTypes.LIFTIGNITER_SERVICE_ERROR:
                error_object.message = 'LiftIgniter service error.';
                break;
            case ErrorTypes.MICROSOFT_VISION_ERROR:
                error_object.message = "Microsoft vision service is unreachable";
                break;
            case ErrorTypes.SEARCH_ERROR:
                error_object.message = 'Something went wront in searching';
                break;
            case ErrorTypes.SUCCESS:
                error_object.message = 'Success!!!';
                break;
            case ErrorTypes.USERNAME_PASS_MISSING:
                error_object.message = 'username or password are missing please enter username and password';
                break;
            case ErrorTypes.USERNAME_INVALID_RANGE:
                error_object.message = 'Your username range is invalid ';
                break;
            case ErrorTypes.USER_EXISTS:
                error_object.message = 'have user in this username please enter other username';
                break;
            case ErrorTypes.PASSWORD_INVALID_RANGE:
                error_object.message = 'Your password range is invalid ';
                break;
            case ErrorTypes.ERROR_CREATION_USER:
                error_object.message = 'error when you create new user';
                break;
            case ErrorTypes.PRODUCT_REPEAT:
                error_object.message = 'product is a repead, pleas enter other product';
                break;
            case ErrorTypes.HAVE_USER:
                error_object.message = 'user already exists please enter other username';
                break;
            case ErrorTypes.INVALID_NAME_RANGE:
                error_object.message = 'Your name range is invalid';
                break;
            case ErrorTypes.NAME_MISSING:
                error_object.message = 'name are missing';
                break;
            case ErrorTypes.PERMISSION_DENIED:
                error_object.message = 'you didn`h have permission';
                break;
            case ErrorTypes.INVALID_AGE_RANGE:
                error_object.message = 'Your age range is invalid';
                break;
            case ErrorTypes.ERROR_IN_DELETING:
                error_object.message = 'Error in deleting user';
                break;
            case ErrorTypes.EMAIL_ERROR:
                error_object.message = 'Invalid email please enter correct email';
                break;
            case ErrorTypes.EMPTY_ID_DELETE:
                error_object.message = 'you pass empty id please pass correct id';
                break;
            case ErrorTypes.EMPTY_ID_FOUND:
                error_object.message = 'in updating id is empty';
                break;
            case ErrorTypes.ERROR_IMPORTANCE:
                error_object.message = 'importance is not defined';
                break;
            case ErrorTypes.ERROR_CREATION_PRODUCT:
                error_object.message = 'error when you create new product';
                break;
            case ErrorTypes.EMPTY_PRODUCTS_DELETE:
                error_object.message = 'you try delete empty products please enter correct product name';
                break;
            case ErrorTypes.NO_PHOTO:
                error_object.message = 'no photo please enter photo';
                break;
            case ErrorTypes.ERROR_IN_FINDING_PHOTO_DELETING:
                error_object.message = 'no photo finding for deleteing';
                break;
            case ErrorTypes.NO_PHOTOS_TYPE:
                error_object.message = 'no photos type please enter photo';
                break;
            case ErrorTypes.ERROR_PRODUCTS_GROUP:
                error_object.message = 'there is not such a group';
                break;
            case ErrorTypes.ERROR_IN_PRODUCT_DELETING:
                error_object.message = 'error in product deleting time';
                break;
            case ErrorTypes.ERROR_IN_DELETING_PRODUCT:
                error_object.message = 'error in deleting product';
                break;
            case ErrorTypes.ISDELETED_ERROR:
                error_object.message = 'you trying delete deleting products';
                break;
            case ErrorTypes.NO_SUCH_PRODUCT_UPDATE:
                error_object.message = 'no such product to update, please enter correct product name';
                break;
            case ErrorTypes.PRODUCTS_EXISTS:
                error_object.message = 'product is alredy exists';
                break;
            case ErrorTypes.PRODUCTS_UPDATE_ERROR:
                error_object.message = 'product updating error';
                break;
            case ErrorTypes.LIST_REPEAT:
                error_object.message = 'list is repeting please enter other name';
                break;
            case ErrorTypes.USER_UPDATE_ERROR:
                error_object.message = 'error in update time';
                break;
            case ErrorTypes.SHOPLIST_ERROR:
                error_object.message = 'cannot find shoplist';
                break;
            case ErrorTypes.ERROR_CREATION_SHOPLIST:
                error_object.message = ' error in creation shoplist';
                break;
            case ErrorTypes.EMPTY_SHOPLIST_DELETE:
                error_object.message = 'there is no shoplist';
                break;
            case ErrorTypes.ERROR_IN_SHOPLIST_DELETING:
                error_object.message = 'error in deleting shoplist';
                break;
            case ErrorTypes.IS_NOT_ACTIVE:
                error_object.message = 'shoplist is not activ';
                break;
            case ErrorTypes.INVALID_LIST_NAME_LENGTH:
                error_object.message = 'invalid list name length';
                break;
            case ErrorTypes.INVALID_GROUP_NAME_LENGTH:
                error_object.message = 'invalid group name length';
                break;
            case ErrorTypes.ERROR_CREATION_GROUP:
                error_object.message = 'error in creation group';
                break;
            case ErrorTypes.ERROR_FINDING_GROUP:
                error_object.message = 'error in finding group';
                break;
            case ErrorTypes.EMPTY_GROUP_DELETE:
                error_object.message = 'empty group is deleting';
                break;
            case ErrorTypes.NO_GROUP:
                error_object.message = 'no group';
                break;
            case ErrorTypes.NO_SUCH_GROUP_UPDATE:
                error_object.message = 'no such group for update';
                break;
            case ErrorTypes.GROUP_UPDATE_ERROR:
                error_object.message = 'error group for update';
                break;
            case ErrorTypes.ERROR_IN_GROUP_DELETING:
                error_object.message = 'error in deleting group';
                break;
            case ErrorTypes.SHOPLIST_UPDATE_ERROR:
                error_object.message = ' error in update shoplist ';
                break;
            case ErrorTypes.ERROR_FINDING_SHOPLIST:
                error_object.message = 'error in find shoplist on db';
                break;
        }
        return error_object;
    }
}


module.exports = Utility;
module.exports.ErrorTypes = ErrorTypes;
