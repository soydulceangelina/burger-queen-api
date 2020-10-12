const { sendSuccessResponse, sendErrorResponse } = require('../response/response');
const httpCodes = require('../response/httpCodes');
const { getAllPlates, getPlateById } = require('./plates.service');

const platesApi = (app) => {
  app.get('/plates', async (_req, res) => {
    try {
      const plates = await getAllPlates();
      sendSuccessResponse(res, httpCodes.success, plates);
    } catch (error) {
      sendErrorResponse(res, error.status, error);
    }
  });

  app.get('/plates/:plateId', async (req, res) => {
    try {
      const { params: { plateId } } = req;
      const plate = await getPlateById(plateId);
      sendSuccessResponse(res, 200, plate);
    } catch (error) {
      sendErrorResponse(res, error.status, error);
    }
  });
};

module.exports = platesApi;
