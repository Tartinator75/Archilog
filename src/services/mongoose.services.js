const mongoose = require('mongoose');
const dbConfigs = require('../configs/db.configs');

//connect à la BDD

exports.connect = () => {
    url = dbConfigs.url
    mongoose.connect(
        url,
        { useNewUrlParser: true }, 
        ()=>console.log("connecté à la base de donnée")
    );
}