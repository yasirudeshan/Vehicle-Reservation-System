const router = require("express").Router();

const reservationController = require("../controllers/reservationController");

router
        .route("/")
        .get (reservationController.getMyReservations) //get all reservations - vehicle owner



module.exports = router;
        