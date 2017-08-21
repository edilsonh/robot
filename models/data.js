const client = require("../dbConnection");

function findAll(callback) {
  let profiles = client.db.collection("robots");
  profiles.find({}).toArray((err, data) => {
    callback(data);
  })
}

function findAllEmployed(callback) {
  let profiles = client.db.collection("robots");
  profiles.find({"job": {$ne:null}}).toArray((err, data) => {
    callback(data);
  });
}

function findAllUnemployed(callback) {
  let profiles = client.db.collection("robots");
  profiles.find({"job": null}).toArray((err, data) => {
    callback(data);
  });
}

function getByUsername(username, callback) {
  let profiles = client.db.collection("robots");
  profiles.findOne({"username": username}, (err, data) => {
    callback(data);
  });
}

module.exports = {
  findAll: findAll,
  getByUsername: getByUsername,
  findAllEmployed: findAllEmployed,
  findAllUnemployed: findAllUnemployed
}
