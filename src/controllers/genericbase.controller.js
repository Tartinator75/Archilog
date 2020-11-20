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
}
module.exports = Generic;