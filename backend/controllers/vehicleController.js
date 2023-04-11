const multer = require("multer");
const Vehicle = require("../models/Vehicle");
const AcceptedVehicle = require("../models/AcceptedVehicle");
const path = require("path");

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


//get all accepted vehicles - vehicle admin
exports.getAllAcceptedVehicle = async(req, res) => {
  try{
      const vehicles = await AcceptedVehicle.find();
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



//delete a specific vehicle by id (Reject a vehicle from pending collection) - vehicle admin
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


//send accepted vehicle details to another collection - vehicle admin 
exports.acceptVehicle = async(req, res) => {
    const {id} = req.params;
    try{
        const vehicle = await Vehicle.findById(id);
        const acceptedVehicleDetails = new acceptedVehicle({
            ...vehicle._doc //spread operator to get all the properties of the vehicle object. use _doc to avoid unwanted metadata to copy to new object.
        })
        await acceptedVehicleDetails.save();
        await Vehicle.findByIdAndDelete(id);
        res.send(acceptedVehicleDetails);

        // Return success message
        return "Vehicle accepted successfully!";

  }catch(err){
      res.status(500).send(err.message);
  }
}


//retrieve all my vehicle details - vehicle owner
exports.getMyVehicles = async(req, res) => {
    const { userId } = req.params;
    try{
        const myVehicles = await Vehicle.find({userId: userId});
        if(!myVehicles){
            res.status(404).send("No vehicles found");
        }
        res.send(myVehicles);
    }catch{
        res.status(500).send(err.message);
    }
}


//retrieve a specific vehicle details - vehicle owner             userId and id both consider?
exports.getMyOneVehicle = async(req, res) => {
  const { id, userId } = req.params;
  try{
      const myVehicle = await Vehicle.findOne({ $and: [{ id }, { userId }] });
      if(!myVehicle){
          res.status(404).send("Vehicle not found");
      }
      res.send(myVehicle);
  } catch(err){
      res.status(500).send(err.message);
  }
}



//edit a specific vehicle details - vehicle owner 
exports.updateVehicle = async (req, res) => {
  const { id } = req.params;
  const  update = {price, description } = req.body;   //add description

  try {
    const updatedVehicle = await AcceptedVehicle.findByIdAndUpdate(id, update, { new: true });
    res.send(updatedVehicle);
  } catch (err) {
    res.status(500).send(err.message);
  }
};


//retrieve all vehicle details as a tourist



