import express from 'express';
import connectDB from './config/db.js';

const app = express();

connectDB();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
