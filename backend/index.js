const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({path : './config/config.env'});
const dbConnection = require('./config/db');
dbConnection();
const todoRoutes = require('./routes/todoRoutes');

const port = process.env.PORT ;


app.use(cors());
app.use(express.json());

//todo Routes
app.use('/', todoRoutes);


app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})