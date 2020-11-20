let Generic = class BaseGeneric{
    
    constructor(generic, res){
        this.generic = generic;
        this.res = res;
    }
    creategeneric =  (generic, res) =>{
        generic
        .save()
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message: err.message
          });
        });
    }
    findByIdgeneric =  (generic, res) =>{
      generic
      .save()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message
        });
      });
  }
  findByIdAndUpdategeneric =  (generic, res) =>{
    generic
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
  }
  findByIdAndRemovegeneric =  (generic, res) =>{
    generic
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
  }
  removeALLgeneric =  (generic, res) =>{
    generic
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
  }
}
module.exports = Generic;