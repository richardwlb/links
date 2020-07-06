const TYPE_JSON = 'application/json';
const STATUS_CODE_OK = 200;
const STATUS_CODE_BAD_REQUEST = 400;
const STATUS_CODE_UNAUTHORIZED = 401;
const STATUS_CODE_NOT_FOUND = 404;
const STATUS_CODE_SERVER_ERROR = 500;

const jsonOK = function (data, message, metadata) {
    message = message ? message : 'Successful request.';
    metadata = metadata ? metadata : {};

    this.status(STATUS_CODE_OK);
    this.type(TYPE_JSON);
    return this.json({ message, data, metadata, status: STATUS_CODE_OK });
};

const jsonBadRequest = function (data, message, metadata) {
    message = message ? message : 'Bad request.';
    metadata = metadata ? metadata : {};

    this.status(STATUS_CODE_BAD_REQUEST);
    this.type(TYPE_JSON);
    return this.json({ message, data, metadata, status: STATUS_CODE_BAD_REQUEST });
};

const jsonUnauthorized = function (data, message, metadata) {
    message = message ? message : 'Unauthorized.';
    metadata = metadata ? metadata : {};

    this.status(STATUS_CODE_UNAUTHORIZED);
    this.type(TYPE_JSON);
    return this.json({ message, data, metadata, status: STATUS_CODE_UNAUTHORIZED });
};

const jsonNotFound = function (data, message, metadata) {
    message = message ? message : 'Not Found.';
    metadata = metadata ? metadata : {};

    this.status(STATUS_CODE_NOT_FOUND);
    this.type(TYPE_JSON);
    return this.json({ message, data, metadata, status: STATUS_CODE_NOT_FOUND });
};

const jsonServerError = function (data, message, metadata) {
    message = message ? message : 'Server error.';
    metadata = metadata ? metadata : {};

    this.status(STATUS_CODE_SERVER_ERROR);
    this.type(TYPE_JSON);
    return this.json({ message, data, metadata, status: STATUS_CODE_SERVER_ERROR });
};

const response = (req, res, next) => {

    res.jsonOK = jsonOK;
    res.jsonBadRequest = jsonBadRequest;
    res.jsonUnauthorized = jsonUnauthorized;
    res.jsonNotFound = jsonNotFound;
    res.jsonServerError = jsonServerError;

    next();

};

module.exports = response;