const router = require("express").Router();
const vehicleController = require("../controllers/vehicleController");


router
        .route("/")
        .post(vehicleController.addVehicle) //add a new vehicle - vehicle owner
        .get(vehicleController.getAllVehicle)   //get all vehicles - vehicle admin
        


router
        .route("/:id")
        .get(vehicleController.getSpecificvehicle) //get a specific vehicle by id - vehicle admin
        .delete(vehicleController.deleteVehicle) //delete a vehicle by id - vehicle admin
        


router
        .route("/accept/:id")
        .get(vehicleController.acceptVehicle) //accept a vehicle - vehicle admin


module.exports = router;