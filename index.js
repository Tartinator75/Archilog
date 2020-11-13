// Exemple adapté de la mise en route d'Express : 
// http://expressjs.com/fr/starter/hello-world.html
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser =  require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

var userRoute = require('./src/routes/user');

app.use('/user', userRoute);

// '/' est la route racine
app.get('/', function (req, res) {
  res.send('Bonjour Tout le monde!');
});
//connect à la BDD
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true }, 
  ()=>console.log("connecté")
  );

app.listen(4000, function () {
  console.log("Application d'exemple écoutant sur le port 4000 !");
});