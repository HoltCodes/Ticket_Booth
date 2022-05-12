const Ticket = require("../models/ticket.model");

module.exports = {
  findAllTickets: (req, res) => {
    Ticket.find({})
    .then((allTickets) => {
      console.log(allTickets);
      res.json(allTickets);
  })
  .catch((err) => {
    console.log("findAllTickets has failed!");
    console.log(err);
    res.json(err);
  });
},

createNewTicket: (req, res) => {
console.log("BODY", req.body);
Ticket.create(req.body)
  .then((newTicket) => {
    console.log(newTicket);
    res.json(newTicket);
  })
  .catch((err) => {
    console.log("createNewTicket has failed!");
    res.status(400).json(err);
  });
},

findOneTicket: (req, res) => {
Ticket.findOne({ _id: req.params.id }) 
  .then((oneTicket) => {
    console.log(oneTicket);
    res.json(oneTicket);
  })
  .catch((err) => {
    console.log(err);
    console.log("findOneTicket has failed!");
    res.json(err);
  });
},

deleteOneTicket: (req, res) => {
Ticket.deleteOne({ id: req.params.id })
  .then((deletedTicket) => {
    console.log(deletedTicket);
    res.json(deletedTicket);
  })
  .catch((err) => {
    console.log(err);
    console.log("deleteOneTicket has failed!");
    res.json(err);
  });
},

updateTicket: (req, res) => {
Ticket.findOneAndUpdate(
  { id: req.params.id },
  req.body,
  { new: true, runValidators: true }
)
  .then((updatedTicket) => {
    console.log(updatedTicket);
    res.json(updatedTicket);
  })
  .catch((err) => {
    console.log(err);
    console.log("updateTicket has failed!");
    res.status(400).json(err); 
  });
},
};