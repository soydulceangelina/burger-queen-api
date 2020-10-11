const { sendSuccessResponse, sendErrorResponse } = require('../response/response');
const httpCodes = require('../response/httpCodes');
const { getAllPlates } = require('./plates.service');

const platesApi = (app) => {
  app.get('/plates', async (_req, res) => {
    try {
      const plates = await getAllPlates();
      sendSuccessResponse(res, httpCodes.success, plates);
    } catch (error) {
      sendErrorResponse(res, error.status, error);
    }
  });
};

module.exports = platesApi;
