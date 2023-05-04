const mongoose=require('mongoose');


const connectDB=(url)=>{
    console.log(`connected to database .....`);
    return mongoose.connect(url,
        { useNewUrlParser:true,
          useCreateIndex:true,
          useFindAndModify:false,
          useUnifiedTopology:true,
      

     } 
         )
}

module.exports=connectDB;

