const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const pizzaSchema = new Schema({
name:{
    type:String,
    required: true,
    unique:true,
    uppercase:true
},
price:{
    type:Number,
    required: true,

},
size:{
    type:String,
  
},

topping:{
    type:[String],
  
},

});

module.exports=mongoose.model('Pizza',pizzaSchema);