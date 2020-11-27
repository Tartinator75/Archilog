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
    findAllgeneric = async (generic,req, res) => {
      
      let notJson = req.query.notJson;
      if(notJson.includes('name')){
        console.log('yes');
      }
      else{
        console.log('no');
      }
      generic.find()
        .then(data => {
          for (const [key, value] of Object.entries(data)) {
            for (const [index, val] of Object.entries(value)) {
              for (const [indexs, va] of Object.entries(notJson)) {
                if(data[key]['_doc'].hasOwnProperty(va)){
                  delete value['_doc'][va]
                }
                
              }
            }
          }
          console.log(data);
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message: err.message || "Une erreur s'est produite pendant la recherche des pizzas"
          });
        });
    }
    findByIdgeneric = async (generic,req, res) => {
      
      generic.findById(req.params.id)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message: err.message || "Une erreur s'est produite pendant la recherche de la pizza"
          });
        });
    };
    findByIdAndUpdate = (generic, req, res) => {
      generic.findOneAndUpdate(req.params.id, req.body)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message: err.message || "Une erreur s'est produite pendant la recherche de la pizza"
          });
        });
    };
    findByIdAndRemovegeneric = (generic, req, res) => {
      generic.findByIdAndRemove(req.params.id)
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