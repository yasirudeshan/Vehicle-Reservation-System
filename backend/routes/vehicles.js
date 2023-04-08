const router = require("express").Router();
const Vehicle = require("../models/Vehicle");

const vehicleController = require("../controllers/vehicleController");


router.route("/").post(vehicleController.addVehicle); //add a new vehicle




module.exports = router;