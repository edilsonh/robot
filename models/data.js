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

function findById(id, callback) {
  let profiles = client.db.collection("robots");
  profiles.findOne({"id": id}, (err, data) => {
    callback(data);
  });
}

module.exports = {
  findAll: findAll,
  //getUserByUsername: getUserByUsername, may have to change this for username
  findAllEmployed: findAllEmployed,
  findAllUnemployed: findAllUnemployed
}
