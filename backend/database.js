const { MongoClient } = require('mongodb');
require('dotenv').config()

const password = process.env.PASSWORD;
// Connection URL
const url = `mongodb+srv://garystroup:${password}@temecula-lims-db.oeo7l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
let client;

const CreateConnection = async ()=> {
    // Use connect method to connect to the server
    client = await MongoClient.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    
}

const getDbConnection = dbName => {
    const db = client.db(dbName);
    return db;
}

exports.CreateConnection = CreateConnection;
exports.getDbConnection = getDbConnection;