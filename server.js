const express =require('express');
const mongoose = require("mongoose");
const passport = require("passport");

const userRoute =require('./routes/userRoute');
const passportConfig =require('./middleware/passportConfig');
const checkRoles =require('./middleware/checkRole');

//const parkingRoute =require('./routes/parkingRoute');

//inport .env file details
require('dotenv').config();


//expess app
const app =express();


// middle ware

app.use (express.json());
app.use (passport.initialize());

passportConfig(passport);

// routes
app.use ('/api/users', userRoute)
//app.use ('/api/parking', parkingRoute)

//connection
mongoose.connect (process.env.MONGO_URI). then(()=>{  
        app.listen(process.env.PORT,()=>{
            console.log("server run on PORT 3005");
        });
    }).catch((error)=>{
        console.log("the error", error)
    })