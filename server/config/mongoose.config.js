const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/Ticket_Booth", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> {
    console.log("Connection Successful")
})
.catch((err)=>{
    console.log(err)
});