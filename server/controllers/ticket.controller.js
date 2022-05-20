const Ticket = require("../models/ticket.model");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const addNewTicket = async (req, res) => {
  const { body } = req;
  let newTicket = new Ticket(body);
  console.log(newTicket);
  console.log("new ticket added id", newTicket);

   try {
     newTicket = await newTicket.save();
     res.json(newTicket);
     return;
   } catch (error) {
     console.log("error!", error);
     res.status(400).json(error);
     return;
   }

};

module.exports = {
  addNewTicket,
};