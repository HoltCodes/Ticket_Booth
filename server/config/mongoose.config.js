const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/TICKET_BOOTH", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> {
    console.log("Connection Successful")
})
.catch((err)=>{
    console.log(err)
});