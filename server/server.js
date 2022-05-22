const express = require("express"); 
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: "http://localhost:3000",
    })
);


require("./config/mongoose.config");
require("./routes/ticket.routes")(app);

const myPort = 8000;

app.listen(8000, () => console.log("Listening on Port 8000"));




















// const dotenv = require("dotenv");
// const express = require("express"); 
// const bcryptjs = require("bcrypt");
// const cors = require("cors");
// const app = express();
// const cookieParser = require("cookie-parser");
// const jwt = require("jsonwebtoken");
// const port = process.env.CLIENT_URL;

// // console.log(process.env.SECRET_KEY, process.env.DATABASE);
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(
//     cors({
//         credentials: true,
//         // origin: process.env.CLIENT_URL,

//         origin: "http://localhost:3000",
//         methods: [ "POST", "GET", "PUT", "DELETE" ],
//     })
// );
// app.use(cookieParser());


// dotenv.config({path : './config.env'});

// // var token = jwt.sign({ foo: "bar" }, process.env.SECRET_KEY);
// // console.log("token : ", token);
// // const decodeToken = jwt.verify(token, process.env.SECRET_KEY);
// // console.log(decodeToken);


// require("./config/mongoose.config");
// require("./routes/ticket.routes")(app);
// require("./routes/user.routes")(app);
// require("dotenv").config();




// app.listen(process.env.PORT, () => 
// console.log("express is running on", process.env.PORT));