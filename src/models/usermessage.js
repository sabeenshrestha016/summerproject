const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema =  new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3,
    },
    phone:{
        type:Number,
        required:true,
        min:10, 
    },
    address:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email ID is already present"],
        validate(value){
            if(!validator.isEmail(value)){
                        throw new Error("Invalid Email");
            }
        }
    },
    password:{
        type:String,
        required:true,
        
    },
    confirmpassword:{
        type:String,
        required:true,
        
    },
})
 //hashing
userSchema .pre("save",async function(next){
    if(this.isModified("password")){
        console.log(`the current password is ${this.password}`);
        this.password = await bcrypt.hash(this.password,10);
        console.log(`the current password is ${this.password}`);

        this.confirmpassword = undefined;
    }

    next(); 
})



//We need to create a Collection
 const User =  new mongoose.model("User",userSchema);
 module.exports = User;

