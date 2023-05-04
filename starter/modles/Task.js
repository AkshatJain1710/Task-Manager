const mongoose=require('mongoose');



const TaskSchema=new mongoose.Schema({
  name:{
    
    type:String,
    require:[true,'must provide a name '],
    trim:true,
    maxlength:[1000,'name can not be more than 20 characters ']

  },
  completed:{
    type:Boolean,
    default:false, 
  },
  
})
module.exports=mongoose.model('Task',TaskSchema);
