const multer = require("multer");
const Vehicle = require("../models/Vehicle");
const path = require("path")

//image uploading path to diskStorage
const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, "images")
    },
    filename : (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname) );
    }
});

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
      if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
        return cb(new Error('Only image files are allowed!'));
      }
      cb(null, true);
    }
  }).fields([
    { name: 'vehicleMainImg', maxCount: 1 },
    { name: 'insuranceImgs', maxCount: 2 },
    { name: 'vehicleImgs', maxCount: 5 }
  ]);



//add a vehicle
exports.addVehicle = async(req, res) => {

    try {
        upload(req, res, async(err) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ message: "Error uploading images" });
            }
            
    
            const newVehicle = new Vehicle({
                ...req.body,
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



//get all vehicles - vehicle admin
exports.getAllVehicle = async(req, res) => {
    try{
        const vehicles = await Vehicle.find();
        res.send(vehicles);
    }catch (err) {
        res.status(500).send(err.message);
    }
}



//get a specific vehicle by id - vehicle admin
exports.getSpecificvehicle = async(req, res) => {
    const {id} = req.params;
    try{
        const specificVehicle = await Vehicle.findById(id);
        res.send(specificVehicle);
    }catch(err){
        res.status(500).send(err.message);
    }
}



//delete a specific vehicle by id - vehicle admin
exports.deleteVehicle = async (req, res) => {
    const { id } = req.params;
    try {
      const vehicle = await Vehicle.findByIdAndDelete(id);
      if (!vehicle) {
        res.status(404).send('Vehicle not found');
      } else {
        res.send(vehicle);
      }
    } catch (err) {
      res.status(500).send(err.message);
    }
  };





//retrieve all vehicle details as a tourist

//retrieve all my vehicles

//retrieve vehicle information based on the vehicle owner should be considered when implementing the function.
