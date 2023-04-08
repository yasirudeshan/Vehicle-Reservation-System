const multer = require("multer");
const Vehicle = require("../models/Vehicle");
const upload = multer({dest: 'uploads/'});

exports.addVehicle = async(req, res) => {

    
    const {ownerName, brand, model, vehicleNumber, capacity, transmissionType, fuelType, price} = req.body;
    const newVehicle = new Vehicle({
        ownerName,
        brand,
        model,
        vehicleNumber,
        capacity,
        transmissionType,
        fuelType,
        price
    })

    try{
        await newVehicle.save();
        res.status(200).json(newVehicle);
    }catch(err){
        res.status(500).json({message : err.message});
    } 
}

