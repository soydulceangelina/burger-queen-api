const admin = require('firebase-admin');
const env = require('../env');

const firebase = admin.initializeApp({
  credential: admin.credential.cert(env.firebase),
  databaseURL: `https://${env.firebase.databaseUrl}.firebaseio.com`,
});

module.exports = firebase;
