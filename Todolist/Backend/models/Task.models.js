import mongoose, { Schema } from "mongoose";
const taskSchema = new mongoose.Schema({
    title : {
        type : String , 
        required : true
    } ,
    description : {
        type : String , 
        required : true
    },
    completed : {
        type : Boolean ,
        default : false
    },
    createdAt : {
        type : Date ,
        default : Date.now
    }
} , {timestamps: true});

const Task = mongoose.model(Task , taskSchema);

export default Task ;