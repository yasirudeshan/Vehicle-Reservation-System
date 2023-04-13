const router = require("express").Router();

const reservationController = require("../controllers/reservationController");

router
        .route("/")
        .get (reservationController.getMyReservations) //get all reservations - traveler
        .post(reservationController.addReservation); //add a reservation - traveler

router
        .route("/:id/:userId")
        .get (reservationController.getMyOneReservation) //get a specific reservation - traveler

router
        .route("/:id")
        .put (reservationController.updateReservation); //update a reservation - traveler


router
        .route("/owner/:vehicleOwnerId")
        .get (reservationController.getMyVehicleReservations); //get all reservations - vehicle owner

router
        .route("/owner/:vehicleOwnerId/:id")
        .get (reservationController.getMyVehicleOneReservation) //get a specific reservation - vehicle owner
        .put (reservationController.updateVehicleReservation); //update a reservation - vehicle owner



module.exports = router;
        