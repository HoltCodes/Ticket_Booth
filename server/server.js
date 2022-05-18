const dotenv = require("dotenv");
const express = require("express"); 
const bcryptjs = require("bcrypt");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");

// console.log(process.env.SECRET_KEY, process.env.DATABASE);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        credentials: true,
        origin: process.env.CLIENT_URL
    })
);
app.use(cookieParser());


dotenv.config({path : './config.env'});
const port = process.env.CLIENT_URL;

require("./config/mongoose.config");
require("./routes/ticket.routes")(app);
require("dotenv").config();




app.listen(process.env.PORT, () => 
console.log("express is running on", process.env.PORT));