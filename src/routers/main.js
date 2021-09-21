const express = require("express");
const router = new express.Router();
const User = require("../models/usermessage");
const bcrypt = require("bcryptjs");



router.get("/",(req, res)=>{
    res.render("index");
}); 

router.get("/about",(req, res)=>{
    res.render("about");
});
router.get("/Service",(req, res)=>{
    res.render("Service");
});

router.get("/login",(req, res)=>{
    res.render("login");
});

router.get("/register",(req, res)=>{
    res.render("register");
});

router.get("/appointment",(req, res)=>{
    res.render("login");
});

router.get("/workshop",(req, res)=>{
    res.render("workshop");
});

router.get("/setting",(req, res)=>{
    res.render("setting");
});

router.get("*",(req, res)=>{
    res.render("404error",{
        errorMsg:'Opps! Page Not Found'
    })
});
 


router.post("/register",async(req, res)=>{
   try{

    const password =req.body.password;
    const cpassword =req.body.confirmpassword;
    if(password === cpassword){
        const userData = new User({
            name:req.body.name,
            phone:req.body.phone,
            address:req.body.address,
            email:req.body.email,
            password:password,
            confirmpassword:cpassword

        })

      
 await userData.save();
      res.status(201).render("login"); //file



    }
    else{
        res.send("password are not matching");
    }
        //res.send(req.body);
        
}catch(error){
      res.status(500).send(error); 
   }
});

//login check
router.post("/login",async(req,res)=>{
try{
        const email = req.body.email;
        const password = req.body.password;

    const useremail = await User.findOne({email:email});

    const isMatch = await bcrypt.compare(password,useremail.password) //user enter,db ma bhako 

     if(isMatch){
         res.status(201).render("appointment"); 
        }else{
            res.send("Invalid Login Details");
        }


}catch(error){
        res.status(400).send("Invalid Login Details");
}
})


module.exports = router;