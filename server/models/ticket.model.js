const mongoose = require("mongoose");

const TicketSchema = mongoose.Schema({
  event: {
    type: String,
    required: [ true, "Event is required."],
  },
  date: {
    type: String,
    required: [ true, "Date of event is required.  xx/xx/xxxx"],
  },
  location: {
    type: String,
    required: [ true, "Location is required."]
  },
  price: {
    type: Number,
    required: [ true, " Price is required"]
  },
  numberOfTickets:{
    type: Number,
    required: [ true, "Number of Tickets is required"]
  },
  desc: {
    type: String,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Ticket = mongoose.model("Ticket", TicketSchema);

module.exports = Ticket;