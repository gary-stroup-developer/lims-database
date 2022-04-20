const { MongoClient } = require('mongodb');


// Connection URL
const url = 'mongodb://localhost:27017';
let client;

const CreateConnection = async ()=> {
// Use connect method to connect to the server
  client = await MongoClient.connect(url,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
  });
  console.log('Connected successfully to server');
}

const getDbConnection = dbName => {
    const db = client.db(dbName);
    return db;
}

exports.CreateConnection = CreateConnection;
exports.getDbConnection = getDbConnection;