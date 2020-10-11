const httpCodes = require('./httpCodes');
const errorMessages = require('./errorMessages');

const sendSuccessResponse = (res, status, body) => {
  const statusToSend = status || httpCodes.success;
  const bodyToSend = body || {};
  res.status(statusToSend).json({
    response: bodyToSend,
  });
};

const sendErrorResponse = (res, status, error) => {
  const message = error.message || errorMessages[httpCodes.internalError];
  const statusToSend = status || httpCodes.internalError;
  res.status(statusToSend).json({
    response: message,
  });
};

module.exports = {
  sendSuccessResponse,
  sendErrorResponse,
};
