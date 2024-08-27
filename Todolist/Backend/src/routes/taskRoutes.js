import express from 'express';
import Task from '../models/taskModel.js';

const router = express.Router();

//create new Task 
router.post('/' , async(req , res ) => {
    try{
        res.status(201).json( await new Task(req.body).save() );
    } catch (error) {
        res.status(400).json({error : error.message});
    }   
});

// get all Task 
router.get('/' , async(req , res)=> {
    try{
        res.status(200).json( await Task.find() )
    } catch (error) {
        res.status(400).json({error : error.message})
    }
});

// update Task
router.get('/:id' , async(req , res) => {
    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new : true})
        res.status(200).json( task );
    } catch (error) {
        res.status(400).json({error : error.message});
    }
});
    
//delete Task
router.delete('/:id' , async(req , res) => {
    try{
        await Task.findByIdAndDelete(req.params.id);
        res.status(200).json({message : "Task Deleted"});
    } catch (error) {
        res.status(400).json({error : error.message})
    }
});

export default router ;