const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/appoinment-DB",{
    useCreateIndex:true,    // deprication warning
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify : false,
    new:true,
    passive:true
    //avoid deprication warning
}).then(()=>{
    console.log(`connection successful`);
}).catch((err) =>
{
    console.log(`No Connection`);
})