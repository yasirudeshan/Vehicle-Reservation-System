const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();


const dbConnect = require("./dbConnect");

const PORT = process.env.PORT || 8080;


app.use(cors());
app.use(bodyParser.json());

//middleware
const vehicleRouter = require("./routes/vehicles");
const acceptedVehicleRouter = require("./routes/acceptedVehicles");

app.use("/vehicle", vehicleRouter);
app.use("/acceptedvehicle", acceptedVehicleRouter);


//connect to database
dbConnect();


//server start
app.listen(PORT, () => {
    console.log(`Server is run on port:  ${PORT} `)
})



