const Pizza = require('../models/pizza.model');
const BaseGeneric = require('./genericbase.controller');

exports.create = async (req, res) => {
 

  Generic = new BaseGeneric;
   return await Generic.creategeneric(new Pizza() ,req, res);
 
  };

  exports.findAll = async (req, res, next) => {
    let Generic = new BaseGeneric();
    //     const {page =1,limit =5} = req.query;
    //     const pizza = await Pizza.find()
    //       .limit(limit * 1)
    //       .skip((page - 1) * limit);
    //     res.status(200).json({ total: pizza.length, pizza });
    return await Generic.findAllgeneric(Pizza, req, res);
  };

  exports.findById = async (req, res) => {
    let Generic = new BaseGeneric();
    return await Generic.findByIdgeneric(Pizza,req, res);
  };

  exports.findByIdAndUpdate = async (req, res) => {
    let Generic = new BaseGeneric();
    return await Generic.findByIdAndUpdategeneric(Pizza,req, res);
  };

  exports.findByIdAndRemove= (req, res) => {
    let Generic = new BaseGeneric();
    return Generic.findByIdAndRemovegeneric(Pizza, req, res);
  };

  exports.removeALL= (req, res) => {

    let Generic = new BaseGeneric();

    return Generic.removeAllGeneric(Pizza, res);
    
  };