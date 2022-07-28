/* eslint-disable no-unused-vars */
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running....');
});
// mount our route
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

//error handling
app.use(notFound); //something that doesnt exist
app.use(errorHandler); //custom handler

const PORT = process.env.PORT || 5050;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
