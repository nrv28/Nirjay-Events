const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const session = require('express-session');
const path = require('path');
const app = express();

//-------------------------------------------------------------------------------------------------------------------------------------
//Env and Database Coonection

dotenv.config();
connectDB();

//--------------------------------------------------------------------------------------------------------------------------------------
//Require Routes


const FetchPartnerData = require('./routes/FetchPartnerData');
const Partneruploadroute = require('./routes/PartnerDataUpload');
const AuthenticationRoute = require('./routes/AuthenticationRoute');
const PartnerUserOrderRoute = require('./routes/PartnerUserOrder');
const PackageBookingRoute = require('./routes/PackageBookingRoute');
const ModifyOrderRoute = require('./routes/ModifyOrder');
const ClientReviewRoute = require('./routes/ClientReviewUpload');
const RazorpayRoute = require('./routes/RazorpayRoute');
const MailRoute = require('./routes/MailRoute');


//-------------------------------------------------------------------------------------------------------------------------------------


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: '12346',
    resave: false,
    maxAge: 600000,
    saveUninitialized: true
  }));

const corsOptions = {
    origin : "*",   // Allowing server to accept request from 3000 proxy
    methods : "GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials : true
};
app.use(cors(corsOptions));


// Routes----------------------------------------------------------------------------------------------------------------------------------------
app.get('/',(req,res)=>{
    res.send("Backend Working Normally");
});    
app.use('/',FetchPartnerData);
app.use('/',Partneruploadroute);
app.use('/',AuthenticationRoute);
app.use('/',PartnerUserOrderRoute);
app.use('/',PackageBookingRoute);
app.use('/',ModifyOrderRoute);
app.use('/',ClientReviewRoute);
app.use('/',RazorpayRoute);
app.use('/',MailRoute);

//----------------------------------------------------------------------------------------------------------------------------------------
// // Only for Deploy Purpose
// app.use(express.static(path.join(__dirname, './client/build')));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, './client/build', 'index.html'))
// });

//---------------------------------------------------------------------------------------------------------------------------------------

app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});



    // "server": "nodemon server.js --ignore client",
    // "client": "npm start --prefix ./client",
    // "dev": "concurrently --kill-others-on-fail \" npm start\" \" npm run client\""
