const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const window = require("window");
const Router = require("./routers/main");

require("./db/conn");
const User = require("./models/usermessage"); //collection name

const port = process.env.PORT || 3000;

//SETTING THE PATH
const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");


//MIDDLEWARE
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));

app.use(express.urlencoded({extended:false}))
app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);

  
app.use(Router);


//ROUTING

//Appointment


 




//server create
app.listen( port , () =>{
    console.log(`server is running at post no. ${port}`);
})