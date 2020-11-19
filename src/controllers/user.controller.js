const User = require('../models/pizza.model');
const bcrypt = require("bcrypt");

exports.create = (req, res) => {
    // req valeur qu'on recupere res resultat
    let hashedpassword = bcrypt.hashSync(req.body.password, 8);
    const user = new User({
      email: req.body.email,
      password: hashedpassword,
      firstname: req.body.firstname,
      lastname: req.body.firstname,
      age: req.body.age,
      admin: req.body.admin
    });
  
    /*if (err) {
      res.send(err);
    } else {*/
    user
      .save()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message
        });
      });
  };

  exports.findAll = (req, res) => {
    User.find()
      .then(users => {
        res.send(users);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Une erreur s'est produite pendant la recherche des utilisateurs"
        });
      });
  };

  exports.findById = (req, res) => {
    User.findById(req.params.id)
      .then(user => {
        res.send(user);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Une erreur s'est produite pendant la recherche de l'utilisateur"
        });
      });
  };

  exports.findByIdAndUpdate = (req, res) => {
    User.findOneAndUpdate(req.params.id, req.body)
      .then(user => {
        res.send(user);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Impossible de mettre à jour l'utilisateur"
        });
      });
  };

  exports.findByIdAndRemove= (req, res) => {
    User.findByIdAndRemove(req.params.id)
      .then(user => {
        res.send(user);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Impossible de supprimer l'utilisateur"
        });
      });
  };

  exports.removeALL= (req, res) => {
    User.remove()
      .then(users => {
        res.send(user);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Impossible de supprimer tous les utilisateurs"
        });
      });
  };