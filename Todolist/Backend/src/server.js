import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';
import dotenv from 'dotenv';
import taskRoutes from './routes/taskRoutes.js';


const app = express();

//Configrattion
dotenv.config();

//DataBase
connectDB();

//Midlewares 
app.use(cors());
app.use(express.json())

//Routes 
app.use('/api/tasks' , taskRoutes );

//Listen Port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
