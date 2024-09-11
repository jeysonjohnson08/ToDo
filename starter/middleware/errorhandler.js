const { CustomAPIError } = require("./customerrorclass");

const errorHandlerMiddleware = (err, req, res, next) => {
    // Provide a default message if err.message is undefined
    if(err instanceof CustomAPIError){
        return res.status(err.status).json({msg:err.message})
    }
    const message = err.message || 'An unexpected error occurred';
    const statusCode = err.status || 500;
    return res.status(statusCode).json({ msg: message });
};

module.exports = errorHandlerMiddleware;
