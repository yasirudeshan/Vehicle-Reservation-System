const router = require("express").Router();
const vehicleController = require("../controllers/vehicleController");

router
        .route("/")
        .get(vehicleController.getAllAcceptedVehicle)   //get all vehicles - vehicle admin   


router
        .route("/:id")
        .patch(vehicleController.updateVehicle) //update a vehicle - vehicle owner     (accepted vehicle)     


router
        .route("/myvehicles/:userId")
        .get(vehicleController.getMyVehicles) //get all vehicles of a specific user - vehicle owner
        

router 
        .route("/myvehicles/:userId/:_id")    //without _id, it will not work ???
        .get(vehicleController.getMyOneVehicle) //get a specific vehicle - vehicle owner


        
module.exports = router;