import express from 'express';
import connectDB from './config/db';

const app = express();

//connect DB
connectDB();

//midlewares


const port = process.env.PORT || 5000 ;
app.listen(port , () => {
    console.log(`server running on port ${port}`)
})