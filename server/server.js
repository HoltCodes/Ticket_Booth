const dotenv = require("dotenv");
const express = require("express"); 
const bcryptjs = require("bcrypt");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const port = process.env.CLIENT_URL;

// console.log(process.env.SECRET_KEY, process.env.DATABASE);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
        methods: [ "POST" ],
        // origin: process.env.CLIENT_URL,
    })
);
app.use(cookieParser());


dotenv.config({path : './config.env'});

// var token = jwt.sign({ foo: "bar" }, process.env.SECRET_KEY);
// console.log("token : ", token);
// const decodeToken = jwt.verify(token, process.env.SECRET_KEY);
// console.log(decodeToken);


require("./config/mongoose.config");
require("./routes/ticket.routes")(app);
require("./routes/user.routes")(app);
require("dotenv").config();




app.listen(process.env.PORT, () => 
console.log("express is running on", process.env.PORT));