
const server = require('../configs/server.configs');
const bodyParser =  require('body-parser');
const apiRoute = require('../routes');
const express = require('express');

const app = express()
app.use(bodyParser.json());
app.use('/api/v1', apiRoute);

exports.start= () =>{
    port = server.port;
    app.listen(port, (err)=> {
        if(err){
            console.log(err);
            process.exit(-1)
        }
      console.log(`Application d'exemple écoutant sur le port ${port}!`);
    });
}