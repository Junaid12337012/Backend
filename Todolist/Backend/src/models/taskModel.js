import mongoose from "mongoose";

const taskschema = new mongoose.Schema({
    title : {
        type : String ,
        required : true 
    },
    user : {
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
    createAT : {    
        type : Date ,
        default : Date.now
    }
}, { timestamps : true });

const Task = mongoose.model("Task" , taskschema)

export default Task;