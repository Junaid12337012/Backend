import express from "express";
import mongoose from "mongoose";

const taskschema = new mongoose.Schema({
    
}, { timestamps : "true" });

const Task = mongoose.model(Task , taskschema)