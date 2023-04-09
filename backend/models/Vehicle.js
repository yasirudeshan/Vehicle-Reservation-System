const {mongoose, Schema} = require("mongoose");
// const fs = require("fs");
// const path = require("path");

const vehicleSchema = new Schema({

  ownerName: {type: String, required : true}, 
  brand: {type: String, required : true},
  model: {type: String, required : true},
  vehicleType : {type : String, required : true},
  userId : {type : String, required : true},
  vehicleNumber : {type: String, required : true},
  capacity : {type: Number, required : true},
  transmissionType : {type: String, required : true},
  fuelType : {type: String, required : true},
  price : {type: Number, required : true},
  insuranceImgs: [{ type: String, required : true }],
  vehicleMainImg: {type : String, required : true},
  vehicleImgs: [{ type: String, required : true }]
  
});


// vehicleSchema.pre('remove', function(next) {
//   const vehicle = this;
//   fs.unlink(path.join(__dirname, '..', 'images', vehicle.vehicleMainImg), (err) => {
//     if (err) console.log(err);
//   });
//   vehicle.insuranceImgs.forEach((img) => {
//     fs.unlink(path.join(__dirname, '..', 'images', img), (err) => {
//       if (err) console.log(err);
//     });
//   });
//   vehicle.vehicleImgs.forEach((img) => {
//     fs.unlink(path.join(__dirname, '..', 'images', img), (err) => {
//       if (err) console.log(err);
//     });
//   });
//   next();
// });


module.exports = mongoose.model('Vehicle', vehicleSchema);
