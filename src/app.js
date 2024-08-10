// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Database connection
const db = require("./config/connect");


// Middleware
app.use(bodyParser.json());


const callbackurl = require('./routes/index'); 
app.use("/api/callbackCheck", callbackurl); 

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


module.exports = app;
