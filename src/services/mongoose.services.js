const mongoose = require('mongoose');
const dbConfigs = require('../configs/db.configs');

//connect à la BDD

exports.connect = () => {
    url = dbConfigs.url
    mongoose.connect(
        url,
        { 
            useNewUrlParser: true 
        }).then(
            ()=>{
                console.log("connecté à la base de donnée")
            }).catch(
                err =>{
                    console.log("impossible de se connecter à la base", err);
                }
            )
        
}