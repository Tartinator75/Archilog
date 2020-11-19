// Exemple adapté de la mise en route d'Express : 
// http://expressjs.com/fr/starter/hello-world.html
const express = require('express');
const app = express();
const UserController = require("./controllers/user-controller");
app.use("/api/plans", UserController);

// '/' est la route racine
app.get('/', function (req, res) {
  res.send('Bonjour Tout le monde!');
});

app.listen(4000, function () {
  console.log("Application d'exemple écoutant sur le port 4000 !");
});