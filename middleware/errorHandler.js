const { constants } = require('../constants');

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode || 500;

    switch (statusCode) {
        case 400: // Bad Request
            res.status(400).json({
                title: "Validation Failed",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case 401: // Unauthorized
            res.status(401).json({
                title: "Unauthorized",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case 403: // Forbidden
            res.status(403).json({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case 404: // Not Found
            res.status(404).json({
                title: "Not Found",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case 500: // Internal Server Error
            res.status(500).json({
                title: "Server Error",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        default:
            console.error("Unhandled Error:", err);
            res.status(500).json({
                title: "Unhandled Error",
                message: err.message,
                stackTrace: err.stack
            });
            break;
    }
};

module.exports = errorHandler;
