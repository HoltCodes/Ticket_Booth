const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
  event: {
    type: String,
    required: [ true, "Event is required."],
    minLength: [3, "Event must be a minimum of 3 characters"]
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
  }
}, { timestamps: true});

const Ticket = mongoose.model("Ticket", TicketSchema);

module.exports = Ticket;