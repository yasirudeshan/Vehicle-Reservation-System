const router = require("express").Router();
const vehicleController = require("../controllers/vehicleController");


router
        .route("/")
        .post(vehicleController.addVehicle) //add a new vehicle - vehicle owner                         //postman checked. working well.
        .get(vehicleController.getAllVehicle)   //get all vehicles - vehicle admin                      //postman checked. working well.
        


router
        .route("/:id")
        .get(vehicleController.getSpecificvehicle) //get a specific vehicle by id - vehicle admin       //postman checked. working well.    
        .delete(vehicleController.deleteVehicle) //delete a vehicle by id - vehicle admin               //postman checked. working well.
        .patch(vehicleController.updateVehicle) //update a vehicle - vehicle owner                      //postman checked. working well.
        


router
        .route("/accept/:id")
        .get(vehicleController.acceptVehicle) //accept a vehicle - vehicle admin                        //postman checked. working well.


router
        .route("/myvehicles/:userId")
        .get(vehicleController.getMyVehicles) //get all vehicles of a specific user - vehicle owner     //postman checked. working well.
        

router 
        .route("/myvehicles/:userId/:id")    //without _id, it will not work ???
        .get(vehicleController.getMyOneVehicle) //get a specific vehicle - vehicle owner                //postman checked. working well.


//tested by using postman. all routes working well.


module.exports = router;