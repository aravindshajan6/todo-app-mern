const mongoose = require("mongoose");

const dotenv = require('dotenv');
dotenv.config({path : './config/config.env'});


const M_URI = process.env.MONGODB_URI;
const port = process.env.PORT;


//mongoDB atlas connection
const dbConnection = async() => await mongoose.connect( M_URI, {
useNewUrlParser: true,
useUnifiedTopology: true
})
.then((data) => {
    console.log(`Connected to ${data.connection.host}`);
})
.catch((err) => {
    console.log(err.message);
});

module.exports =  dbConnection;