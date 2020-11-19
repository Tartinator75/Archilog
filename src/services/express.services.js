
const server = require('../configs/server.configs');
const bodyParser =  require('body-parser');
const userRoute = require('../routes/user');
const express = require('express');

const app = express()
app.use(bodyParser.json());
app.use('/user', userRoute);

exports.start= () =>{
    port = server.port;
    app.listen(port, function () {
      console.log(`Application d'exemple écoutant sur le port ${port}!`);
    });
}