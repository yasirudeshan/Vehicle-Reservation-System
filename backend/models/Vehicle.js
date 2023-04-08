const mongoose = require("mongoose");
const { Schema } = mongoose;

const vehicleSchema = new Schema({

  ownerName: {type: String, required : true}, 
  brand: {type: String, required : true},
  model: {type: String, required : true},
  vehicleNumber : {type: String, required : true},
  capacity : {type: Number, required : true},
  transmissionType : {type: String, required : true},
  fuelType : {type: String, required : true},
  price : {type: Number, required : true},
 // insurancegeImg : [{ type: Schema.Types.ObjectId, ref: 'Image', required : true }],
 // vehicleImg : [{ type: Schema.Types.ObjectId, ref: 'Image', required : true }],

  
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
//module.exports = Vehicle;