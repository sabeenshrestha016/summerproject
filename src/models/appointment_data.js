const mongoose = require("mongoose");
const validator = require("validator");

const appDataSchema =  new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3,
    },

   
})



//We need to create a Collection
 const EAppData =  new mongoose.model("appointment_data",appDataSchema);
 module.exports = EAppData;

