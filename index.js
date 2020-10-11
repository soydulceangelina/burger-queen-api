const express = require('express');
const platesApi = require('./plates/plates.api');
const env = require('./env');

const app = express();

platesApi(app);

app.listen(env.port, () => {
  console.log(`Server running on http://localhost:${env.port}`);
});
