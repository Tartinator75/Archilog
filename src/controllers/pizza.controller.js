const Pizza = require('../models/pizza.model');
const BaseGeneric = require('./genericbase.controller');

exports.create = async (req, res) => {
  const pizza = new Pizza({
    name: req.body.name,
    price: req.body.price,
    size: req.body.size,
    topping: req.body.topping
  });
  let Generic = new BaseGeneric(pizza,res);
   return await Generic.creategeneric(Generic.generic, Generic.res);
  // return await createGeneric(pizza);
  // return await createGeneric(Pizza, req);
    // req valeur qu'on recupere res resultat
  
    /*if (err) {
      res.send(err);
    } else {*/
    
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