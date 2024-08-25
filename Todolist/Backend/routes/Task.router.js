import express from 'express';
import Task from '../models/Task.models';

const router = express.Router();

router.post('/' , async(req , res) => {
    try{
        const task = await new Task(req.body).save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({error : error.message});
    }
});



export default router;