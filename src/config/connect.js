require('dotenv').config();
const mongoose = require('mongoose')

const MONGO_URL = process.env.MONGODB_URL;

mongoose.connect(MONGO_URL).then(()=>{
    console.log("connection established");
    
}).catch((err) => {
    console.log(err.message + "error connecting to Mongo")
    
}) 


