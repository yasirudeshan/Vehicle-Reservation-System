const {mongoose, Schema} = require("mongoose");

const vehicleTransactionSchema = new Schema({
    vehicleId: {type: String, required : true},
    vehicleNumber: {type: String, required : true},
    withDriver : {type : Boolean, required : true},
    date : {type : Date, required : true},
    pickupLocation : {type : String, required : true},
    pickupDate : {type : Date, required : true},
    returnDate : {type : Date, required : true},
    amount : {type : Number, required : true}
});

const VehicleTransaction = mongoose.model("VehicleTransaction", vehicleTransactionSchema);
