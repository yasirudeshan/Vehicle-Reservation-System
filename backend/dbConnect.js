const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

const URL = process.env.MONGODB_URL;

async function dbConnect(){
   await mongoose.connect(URL).then(() => {
    console.log("Successfully Connected");
   }).catch(err => {
    console.log(err);
   })
}


module.exports = dbConnect;