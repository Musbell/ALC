const {MongoClient} = require('mongodb');

const MONGO_URL = 'mongodb://musbell:password@ds013405.mlab.com:13405/alc';
module.exports = async () => {
  const db = await MongoClient.connect(MONGO_URL);
  return {
    Students: db.collection('students'),
    Users: db.collection('users'),
  }
};
