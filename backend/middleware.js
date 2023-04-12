const bodyParser = require("body-parser");
const cors = require("cors");

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const vehicleRouter = require("./routes/vehicles");
const acceptedVehicleRouter = require("./routes/acceptedVehicles");
const reservationRouter = require("./routes/reservations");

app.use("/vehicle", vehicleRouter);
app.use("/acceptedvehicle", acceptedVehicleRouter);
app.use("/reservation", reservationRouter);