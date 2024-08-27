import mongoose from "mongoose";

const taskschema = new mongoose.Schema({
    
    user : {
        type : String ,
        required : true 
    },
    title : {
        type : String ,
        required : true 
    },
    description : {
        type : String ,
        required : true 
    },
    completed : {
        type : Boolean ,
        default : false
    },
}, { timestamps : true });

const Task = mongoose.model("Task" , taskschema)

export default Task;