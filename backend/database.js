const { MongoClient } = require('mongodb');


// Connection URL
const url = 'mongodb://localhost:27017';
let client;

const CreateConnection = async ()=> {
    try {
    // Use connect method to connect to the server
    client = await MongoClient.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    
    } finally {
        await client.close();
    }
}

const getDbConnection = dbName => {
    const db = client.db(dbName);
    return db;
}

exports.CreateConnection = CreateConnection;
exports.getDbConnection = getDbConnection;