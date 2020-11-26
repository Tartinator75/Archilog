let Generic = class BaseGeneric{
    
    constructor(){
    }
    creategeneric =  (generic,req, res) =>{
        
        for (const [key, value] of Object.entries(req.body)) {
            generic[key] = value;
          }

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
    findAllgeneric = (generic, res) => {
      generic.find()
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message: err.message || "Une erreur s'est produite pendant la recherche des pizzas"
          });
        });
    }
    findByIdgeneric = (generic, res) => {
      generic.findById()
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message: err.message || "Une erreur s'est produite pendant la recherche de la pizza"
          });
        });
    };
    findByIdAndRemovegeneric = (generic, res) => {
      generic.findByIdAndRemove()
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message: err.message || "Impossible de supprimer la pizza"
          });
        });
    };
    removeAllGeneric  = (generic, res)  => {
        generic.remove()
      .then(generic => {
        res.send(generic);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Impossible de supprimer tous les pizzas"
        });
      });
    }

}
module.exports = Generic;