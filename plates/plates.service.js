const firebase = require('../lib/firebase');
const collections = require('../utils/collections');

const db = firebase.firestore();

const getAllPlates = async () => {
  try {
    const plates = [];
    const snapshot = await db.collection(collections.plates).get();
    snapshot.forEach((doc) => {
      plates.push({ ...doc.data(), id: doc.id });
    });
    return plates;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllPlates,
};
