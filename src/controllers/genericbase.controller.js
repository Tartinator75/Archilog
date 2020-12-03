const moment = require('moment');
    
let Generic = class BaseGeneric{
    constructor(){
    }
    creategeneric =  (generic,req, res) =>{
        
        for (const [key, value] of Object.entries(req.body)) {
          generic[key] = value;
          console.log(key)
        }
        console.log(generic)
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
     // Traitement du Tri
      if(req.query.desc){
        req.query.desc = '-' + req.query.desc

        generic.find().sort(req.query.desc)
        .then(data => {   
          res.send(data); 
        })
      }
      else if(req.query.asc){
        req.query.asc = '' + req.query.asc

        generic.find().sort(req.query.asc)
        .then(data => {   
          res.send(data); 
        })
      }
     
      else{
      generic.find()
        .then(data => {
          let newData = [];

          // Traitement du notJson
          if(req.query.notJson != undefined){
            let notJson = req.query.notJson;
            for (const [key, value] of Object.entries(data)) {
              for (const [index, val] of Object.entries(value)) {
                for (const [indexs, va] of Object.entries(notJson)) {
                  if(data[key]['_doc'].hasOwnProperty(va)){
                    delete value['_doc'][va]
                   
                  } 
                }
              }
            }
          }
           // Gestion du filtre par date
           for (const [key, value] of Object.entries(req.query)) {
            let lowerkey = key.toLocaleLowerCase();
            if(lowerkey.indexOf("date") !== -1){ 
              if(value.indexOf("," == -1)){

                if(value.indexOf("-") != -1){
                  var dateSplit = value.split("-");    
                }
                else if(value.indexOf("/") != -1){
                  var dateSplit = value.split("/");
                }
                
                if(dateSplit[2].length > 2){
                  var date= moment(dateSplit[2] + "/" + dateSplit[1] + "/" + dateSplit[0]);
                }
                else if(dateSplit[2].length = 2 && dateSplit[0].length == 4){
                  var date = moment(value)
                }
                for (const [elemGeneric, attributs] of Object.entries(data)) {
                  if(data[elemGeneric][key] != undefined){
                    let dateObj = moment(data[elemGeneric][key])
                    console.log(date, date)
                    console.log(data[elemGeneric][key] + " vs " + date);
                    if(dateObj == date){
                      console.log("egalité")
                      newData.push(data[elemGeneric]);
                    }
                  }
                }
              }
            }
          }
          // Traitement du rating
          if(req.query.rating != undefined){
            let ratingSort = req.query.rating;
            if(ratingSort.length == 1 ){
              ratingSort = ratingSort -1;
              data = data[ratingSort];
            }
            else{
              if(ratingSort.indexOf("[") == -1 && ratingSort.indexOf("]") == -1){
                let filterByIndex = ratingSort.split(',');
                
                filterByIndex.forEach(element => {
                  newData.push(data[element]);
                });
                data = newData;
              }
              else if(ratingSort.indexOf("[") != -1 && ratingSort.indexOf("]") != -1){
                if(ratingSort.length == 5){
                  ratingSort = ratingSort.replace("[", "");
                  ratingSort = ratingSort.replace(']', "");
                  let filterRange = ratingSort.split(',');
                  let valMin = filterRange[0];
                  let valMax = filterRange[1];
                  
                  for (const [key, value] of Object.entries(data)) {
                    if(key >= valMin && key <= valMax){
                      newData.push(value);
                    }
                  }
                }
                else if(ratingSort.length == 4){
                  
                  let filterRange = ratingSort.split(",");
                  if(filterRange[0].length == 2){
                    let valMin = filterRange[0].replace("[", "");
                    for (const [key, value] of Object.entries(data)) {
                      if(key >= valMin){
                        newData.push(value);
                      }
                    }
                  }
                  if(filterRange[1].length == 2){
                    let valMax = filterRange[1].replace("]", "");
                    for (const [key, value] of Object.entries(data)) {
                      if(key <= valMax){
                        newData.push(value);
                      }
                    }
                  }
                }
              }
            }
            if(newData.length> 0){

              data = newData;
            }
           
          }
          
          res.send(data);
          
        })
        .catch(err => {
          res.status(500).send({
            message: err.message || "Une erreur s'est produite pendant la recherche des pizzas"
          });
        });
      }
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
    findByIdAndUpdategeneric = (generic, req, res) => {
      generic.findByIdAndUpdate(req.params.id, req.body)
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