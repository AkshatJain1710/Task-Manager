const Task=require('../modles/Task');
const getAllTasks=async (req,res)=>{
    //get all tasks
    try{
       const tasks=await Task.find({}) 
       res.status(200).json({tasks})
    }catch(error){
        
        res.status(500).json({msg:error})
    }
} 


const createTask=async(req,res)=>{
   //create task
   //after the post request here we insert data into the database using Task.create function 
   
   try {
    if(!req.body.name){throw Error('NAME NOT FOUND PLEASE ENTER NAME')}
    const task=await Task.create(req.body);
    //console.log(req.body);
    res.status(201).json({task});
   } catch (error) {
    console.log(typeof(error));
    
    res.status(500).json({msg:error.message})
    
   }
    
}

const getTask= async(req,res)=>{
    //get single task
   try{
    const{id:taskID}=req.params;
    const task=await Task.findOne({_id:taskID}); 
    if(!task){
        return res.status(404).json({msg:`NO task with id : ${taskID}`})
    }
    
    res.status(200).json({task })
   }catch(error){
       res.status(500).json({msg:error})
   }
  
}


const deleteTask=async(req,res)=>{

    //delete task 

    try {
        const {id:taskID}=req.params;
        const task=await Task.findOneAndDelete({_id:taskID});
        if (!task){
            return res.status(404).json({msg:`no task with id :${taskID}`})
        }
        res.status(200).json({task});
       // res.status(200).json({task:null,status:'success'})
    } catch (error) {
        res.status(500).json({msg:error});
    }
   
}

const updateTask=async(req,res)=>{
    //update task 
 try {
    const{id:taskID}=req.params;
    const task=await Task.findOneAndUpdate({_id:taskID},req.body,{new :true,runValidators:true});
    if(!task){
        return res.status(404).json({msg:`NO task with :${taskID}`})
    }

    res.status(200).json({task});
    // res.status(200).json({id:taskID,data:req.body})
 } catch (error) {
    res.status(500).json({msg:error});
 }
}




module.exports={
    getAllTasks,createTask,getTask,updateTask,
    deleteTask,
}