import express from express ;
import Task from "../models/Task.models";

const router = express.Router();

// Create a new Task
router.post('/' , async(req , res) => {
    try{
        const task = await new Task(req.body).save();
        res.status(201).json(task);
    } catch (error) {
         res.status(400).json({erro : error.message});
    }
});


//Read all task
