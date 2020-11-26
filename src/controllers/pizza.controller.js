const Pizza = require('../models/pizza.model');
const BaseGeneric = require('./genericbase.controller');

exports.create = async (req, res) => {
 

  Generic = new BaseGeneric;
   return await Generic.creategeneric(new Pizza() ,req, res);
 
  };

  exports.findAll = async (req, res) => {
    let Generic = new BaseGeneric();
    return await Generic.findAllgeneric(Pizza, res);
  };

  exports.findById = async (req, res) => {
    let Generic = new BaseGeneric();
    return await Generic.findByIdgeneric(Pizza, res);
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

    let Generic = new BaseGeneric();

    return Generic.removeAllGeneric(Pizza, res);
    
  };