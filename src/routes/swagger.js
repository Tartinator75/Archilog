const express = require("express");
const app = express();



// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Pizza API",
      description: "Pizza API Information",
      contact: {
        name: "Pizza Developer"
      },
      servers: ["http://localhost:4000"]
    }
  },
  // ['.routes/*.js']
  apis: ["index.js"]
};


 
  module.exports = swaggerOptions;