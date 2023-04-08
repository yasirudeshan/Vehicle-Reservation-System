const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();


const dbConnect = require("./dbConnect");

const PORT = process.env.PORT || 8080;


app.use(cors());
app.use(bodyParser.json());


const vehicleRouter = require("./routes/vehicles");
app.use("/vehicle", vehicleRouter);


//connect to database
dbConnect();


//server start
app.listen(PORT, () => {
    console.log(`Server is run on port:  ${PORT} `)
})



