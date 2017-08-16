let client = {
  db: null,
  connect: connect
};

function connect(callback) {
  let MongoClient = require("mongodb").MongoClient;

  const MONGODB_DB = "robotdb";
  let url = `mongodb://localhost:27017/${MONGODB_DB}`;

  MongoClient.connect(url, (err, db) => {
    if (err) {
      throw err;
      exit(1);
    }

    console.log(`Connect MongoDB @ ${url}`);
    client.db = db;
    callback(client);
  })
}

module.exports = client;
