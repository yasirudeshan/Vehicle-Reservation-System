const Reservation = require("../models/Reservation");
const Vehicle = require("../models/Vehicle");
const { v4: uuidv4 } = require('uuid');

exports.addReservation = async (req, res) => {    //tested in postman - working well
    try {
      
      // Fetch vehicle details to calculate price
      const vehicle = await Vehicle.findById(req.body.vehicleId);
      
      if (!vehicle) {
        return res.status(404).json({ message: "Vehicle not found" });
      }

  
      const numberOfDays = (new Date(req.body.returnDate) - new Date(req.body.pickupDate)) / (1000 * 3600 * 24);  //convert milliseconds to days
      const amount = (numberOfDays + 1) * vehicle.price;  //add by 1 because if pickup date is 1st and return date is 3rd, it is 2 days.

      if(numberOfDays < 0){
        return res.status(400).json({ message: "Invalid dates" });
      }
  
      const newReservation = new Reservation({
        userId: req.body.userId,
        vehicleId: vehicle.id,
        vehicleNumber: vehicle.vehicleNumber,
        date: new Date(),
        location: vehicle.location,
        pickupDate: req.body.pickupDate,
        returnDate: req.body.returnDate,
        price: amount,
        vehicleOwnerId: vehicle.userId,
        transactionId: uuidv4(),
      });
  
      await newReservation.save();
      res.status(200).json(newReservation);
  
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  };
  

 
//get my all reservations - traveler                               //postman tested working well.
exports.getMyReservations = async (req, res) => {
    try{
        const {userId} = req.params;
        const reservations = await Reservation.find({userId : userId});
        res.send(reservations);

    }catch(err){
        res.status(500).send(err.message);
    }
}


//get a specific reservation - traveler                                 //postman tested working well.
exports.getMyOneReservation = async (req, res) => {
    try{
        const {userId, id} = req.params;
        const reservation = await Reservation.findOne({ $and: [{ _id : id }, { userId }] });
        res.send(reservation);

    }catch(err){
        res.status(500).send(err.message);
    }
}


// //update a reservation - traveler
// exports.updateReservation = async (req, res) => {
    
//     const { id } = req.params;
//     const update = req.body;
    
//     try{
//         const updateReservation = await Reservation.findByIdAndUpdate(id, update, {new: true});
//         res.send(updateReservation);

//     }catch {
//         res.status(500).send(err.message);
//     }
// }


//delete/cancel a reservation   - traveler and vehicle owner     //postman tested working well.
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


//get all reservations - vehicle owner                               //not working
exports.getAllReservations = async (req, res) => {
  const {vehicleOwnerId} = req.params;
    try{
        const reservations = await Reservation.find({vehicleOwnerId : mongoose.Types.ObjectId(vehicleOwnerId)});
        res.send(reservations);
    }catch(err){
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

// //update a reservation - vehicle owner
// exports.updateReservation = async (req, res) => {

//     const { id } = req.params;
//     const {status} = req.body;

//     try{
//         const updateReservationOwner = await Reservation.findByIdAndUpdate(id, {status : status}, {new: true});
//         res.send(updateReservationOwner);
//     }
//     catch {
//         res.status(500).send(err.message);
//     }   
// }


//retrive vehicles which are not booked for a given date range
exports.getAvailableVehicles = async (req, res) => {
    try{
        const {pickupDate, returnDate} = req.body;
        const vehicles = await Vehicle.find();
        const availableVehicles = vehicles.filter((vehicle) => {
            const reqPickupDate = new Date(pickupDate);
            const reqReturnDate = new Date(returnDate);
            const resPickupDate = new Date(vehicle.pickupDate);
            const resReturnDate = new Date(vehicle.returnDate);
            return (
                (reqPickupDate < resPickupDate && reqReturnDate < resPickupDate) ||
                (reqPickupDate > resReturnDate && reqReturnDate > resReturnDate)
            );
        });
        res.send(availableVehicles);
    }catch(err){
        res.status(500).send(err.message);
    }
}

//retrieve available vehicles for a given date and location and vehicle type  
exports.getAvailableVehiclesByLocation = async (req, res) => {
    try{
        const {pickupDate, returnDate, location, vehicleType} = req.body;
        const vehicles = await Vehicle.find();
        const availableVehicles = vehicles.filter((vehicle) => {
            const reqPickupDate = new Date(pickupDate);
            const reqReturnDate = new Date(returnDate);
            const resPickupDate = new Date(vehicle.pickupDate);
            const resReturnDate = new Date(vehicle.returnDate);
            return (
                (reqPickupDate < resPickupDate && reqReturnDate < resPickupDate) ||
                (reqPickupDate > resReturnDate && reqReturnDate > resReturnDate)
            ) && (vehicle.location === location) && (vehicle.vehicleType === vehicleType);
        });
        res.send(availableVehicles);
    }catch(err){
        res.status(500).send(err.message);
    }
}








