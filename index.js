const express = require('express');
const platesApi = require('./plates/plates.api');
const env = require('./env');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods',
      'PUT,POST,PATCH,DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

platesApi(app);

app.listen(env.port, () => {
  console.log(`Server running on http://localhost:${env.port}`);
});
