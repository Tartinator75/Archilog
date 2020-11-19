const Pizza = require('../models/pizza.model');

exports.create = (req, res) => {
    // req valeur qu'on recupere res resultat
    const pizza = new Pizza({
      name: req.body.name,
      price: req.body.price,
      size: req.body.size,
      topping: req.body.topping
    });
  
    /*if (err) {
      res.send(err);
    } else {*/
      pizza
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
    Pizza.find()
      .then(pizzas => {
        res.send(pizzas);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Une erreur s'est produite pendant la recherche des pizzas"
        });
      });
  };

  exports.findById = (req, res) => {
    Pizza.findById(req.params.id)
      .then(pizza => {
        res.send(pizza);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Une erreur s'est produite pendant la recherche de la pizza"
        });
      });
  };

  exports.findByIdAndUpdate = (req, res) => {
    Pizza.findOneAndUpdate(req.params.id, req.body)
      .then(pizza => {
        res.send(pizza);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Impossible de mettre à jour la pizza"
        });
      });
  };

  exports.findByIdAndRemove= (req, res) => {
    Pizza.findByIdAndRemove(req.params.id)
      .then(pizza => {
        res.send(pizza);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Impossible de supprimer la pizza"
        });
      });
  };

  exports.removeALL= (req, res) => {
    Pizza.remove()
      .then(pizzas => {
        res.send(pizza);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Impossible de supprimer tous les pizzas"
        });
      });
  };