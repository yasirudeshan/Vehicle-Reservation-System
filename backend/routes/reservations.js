const router = require("express").Router();

const reservationController = require("../controllers/reservationController");

router
        .route("/")
        .post(reservationController.addReservation) //add a reservation - traveler                             //working well tested in postman
       
router 
        .route("/:id")
        .delete(reservationController.deleteReservation) //delete/cancel a reservation - traveler and vehicle owner //working well tested in postman        

router
        .route("/:userId/:id")
        .get (reservationController.getMyOneReservation) //get a specific reservation - traveler                //working well tested in postman
        
router
         .route("/:userId")
         .get (reservationController.getMyReservations) //get all reservations - traveler                        //working well tested in postman


        //.put (reservationController.updateReservation); //update a reservation - traveler        ????????????????????


router
        .route("/owner/:vehicleOwnerId")
        .get (reservationController.getAllReservations); //get all reservations - vehicle owner        //not working

router
        .route("owner/:vehicleOwnerId/:id")
        .get (reservationController.getOneReservation) //get a specific reservation - vehicle owner    //not tested
  //    .put (reservationController.updateReservation); //update a reservation - vehicle owner



module.exports = router;
        