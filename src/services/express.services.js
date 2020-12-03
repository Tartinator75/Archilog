const server = require('../configs/server.configs');
const bodyParser =  require('body-parser');
const apiRoute = require('../routes');
const express = require('express');
const swagger = require('../routes/swagger')
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const swaggerDocs = swaggerJsDoc(swagger);

const app = express()
app.use(bodyParser.json());
app.use('/api/v1', apiRoute);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

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