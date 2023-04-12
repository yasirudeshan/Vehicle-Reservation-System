const express = require("express");
const app = express();
const dbConnect = require("./dbConnect");

const PORT = process.env.PORT || 8080;

//connect to database
dbConnect();


//server start
app.listen(PORT, () => {
    console.log(`Server is run on port:  ${PORT} `)
})



