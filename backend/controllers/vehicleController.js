const multer = require("multer");
const Vehicle = require("../models/Vehicle");
const path = require("path");


//image uploading path to diskStorage
const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, "images")
    },
    filename : (req, file, cb) => {
        console.log(file);
        cb(null, file.fieldname + '-' + Date.now() );
    }
});

const upload = multer({storage: storage}).fields([
    { name: 'vehicleMainImg', maxCount: 1 },
    { name: 'insuranceImgs', maxCount: 2 },
    { name: 'vehicleImgs', maxCount: 5 }
]);


exports.addVehicle = async(req, res) => {

    try {
        upload(req, res, async(err) => {
            if (err) {
                console.log(err);
                return res.status(400).json({ message: "Error uploading images" });
            }
            
            const {ownerName, brand, model, vehicleNumber, capacity, transmissionType, fuelType, price} = req.body;
    
            const newVehicle = new Vehicle({
                ownerName,
                brand,
                model,
                vehicleNumber,
                capacity,
                transmissionType,
                fuelType,
                price,
                vehicleMainImg: req.files.vehicleMainImg[0].filename,
                insuranceImgs: req.files.insuranceImgs.map(file => file.filename),
                vehicleImgs: req.files.vehicleImgs.map(file => file.filename)
            })

            await newVehicle.save();
            res.status(200).json(newVehicle);
        });
    } catch(err) {
        console.log(err);
        res.status(500).json({message : err.message});
    }
}
