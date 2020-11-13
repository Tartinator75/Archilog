const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
email:{
    type:String,
    required: true,
    unique:true,
    lowercase:true,
},
password:{
    type:String,
    required: true,
    minlength:4,
    maxlength:128
},
firstname:{
    type:String,
  
},

lastname:{
    type:String,
  
},
age:{
    type: Number,
},
admin:{
    type:Boolean,
}
});

module.exports=mongoose.model('User',userSchema);