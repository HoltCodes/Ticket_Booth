const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
  event: {
    type: String,
    required: [ true, "Event is required."],
    minlength: [3, "Event must ba a minimum of 3 characters."]
  },
  date: {
    type: String,
    required: [ true, "Date of event is required.  xx/xx/xxxx"],
    minlength: [3, "Date must ba a minimum of 3 characters."]
  },
  location: {
    type: String,
    required: [ true, "Location is required."],
    minlength: [3, "Location must ba a minimum of 3 characters."]
  },
  price: {
    type: Number,
    required: [ true, " Price is required"],
    minlength: [3, "Price must ba a minimum of 3 characters."]
  },
  numberOfTickets:{
    type: Number,
    required: [ true, "Number of Tickets is required"],
    minlength: [1, "Number of tickets must ba a minimum of 1 characters."]
  },
  desc: {
    type: String,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
}, { timestamps: true });

const Ticket = mongoose.model("Ticket", TicketSchema);

module.exports = Ticket;