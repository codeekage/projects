const  MongoClient = require('mongoose');  

module.exports = (config) => {
    var dbURI = config.env.db;
    MongoClient.connect(dbURI, { useNewUrlParser: true },  (err, db) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('connected to ' + dbURI);
        }
    })
}