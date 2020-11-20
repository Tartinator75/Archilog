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

  exports.findById = async (req, res) => {
    let Generic = new BaseGeneric();
    return await Generic.findByIdgeneric(Pizza, res);
  };

  exports.findByIdAndUpdate = async (req, res) => {
    let Generic = new BaseGeneric();
    return await Generic.findByIdAndUpdategeneric(Pizza, res);
  };

  exports.findByIdAndRemove= async (req, res) => {
    let Generic = new BaseGeneric();
    return await Generic.findByIdAndRemovegeneric(Pizza, res);
  };

  exports.removeALL= async (req, res) => {
    let Generic = new BaseGeneric();
    return await Generic.removeALLgeneric(Pizza, res);
  };