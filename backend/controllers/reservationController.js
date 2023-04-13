const Reservation = require("../models/Reservation");

//add a reservation - traveler
exports.addReservation = async (req, res) => {
    try {
        const newReservation = new Reservation({
        ...req.body,
        });
    
        await newReservation.save();
        res.status(200).json(newReservation);

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
    };


//get my reservations - traveler
exports.getMyReservations = async (req, res) => {
    try{
        const {userId} = req.params;
        const reservations = await Reservation.find({userId : userId});
        res.send(reservations);

    }catch{
        res.status(500).send(err.message);
    }
}


//get a specific reservation - traveler
exports.getMyOneReservation = async (req, res) => {
    try{
        const {userId, _id} = req.params;
        const reservation = await Reservation.findOne({ $and: [{ _id }, { userId }] });
        res.send(reservation);

    }catch{
        res.status(500).send(err.message);
    }
}


//update a reservation - traveler
exports.updateReservation = async (req, res) => {
    
    const { id } = req.params;
    const update = req.body;
    
    try{
        const updateReservation = await Reservation.findByIdAndUpdate(id, update, {new: true});
        res.send(updateReservation);

    }catch {
        res.status(500).send(err.message);
    }
}


//delete a reservation   - traveler and vehicle owner
exports.deleteReservation = async (req, res) => {
    const { id } = req.params;

    try {
      const reservation = await Reservation.findByIdAndDelete(id);
      if (!reservation) {
        res.status(404).send('Reservation not found');
      } else {
        res.send(reservation);
      }

    } catch (err) {
      res.status(500).send(err.message);
    }
  }



//========================================================================================================


//get all reservations - vehicle owner
exports.getAllReservations = async (req, res) => {
    
    const {vehicleOwnerId} = req.params;
    try{
        const reservations = await Reservation.find({vehicleOwnerId : vehicleOwnerId});
        res.send(reservations);

    }catch{
        res.status(500).send(err.message);
    }
}


//get a specific reservation - vehicle owner
exports.getOneReservation = async (req, res) => {
    
    const {vehicleOwnerId, _id} = req.params;
    try{
        const reservation = await Reservation.findOne({ $and: [{ _id }, { vehicleOwnerId }] });
        res.send(reservation);

    }catch{
        res.status(500).send(err.message);
    }
}

//update a reservation - vehicle owner
exports.updateReservation = async (req, res) => {

    const { id } = req.params;
    const {status} = req.body;

    try{
        const updateReservationOwner = await Reservation.findByIdAndUpdate(id, {status : status}, {new: true});
        res.send(updateReservationOwner);
    }
    catch {
        res.status(500).send(err.message);
    }   
}

