const Ticket =  require("../models/ticket.model");
const User = require("../models/user.model")

module.exports = {
    findAllTickets: (req,res)=>{
        Ticket.find({})
            .then((allTickets)=>{
                console.log(allTickets);
                res.json(allTickets);
            })
            .catch((err)=>{
                res.status(400).json(err);
            })

    },
    addNewTicket: (req,res)=>{
        Ticket.create(req.body)
            .then((newTicket)=>{
                console.log(newTicket);
                res.json(newTicket);
            })
            .catch((err)=>{
                console.log(err);
                console.log("addTicket has failed!");
                res.status(400).json(err);
            })
    },
    findOneTicket: (req,res) =>{
        Ticket.findOne({_id: req.params.id})
            .then((oneTicket)=>{
                console.log(oneTicket);
                res.json(oneTicket)
            })
            .catch((err)=>{
                console.log(err);
                console.log('findOneTicket has failed!');
                res.status(400).json(err);
            })
    },
    deleteOneTicket: (req,res) =>{
        Ticket.deleteOne({_id: req.params.id})
            .then((oneTicket)=>{
                console.log(oneTicket);
                res.json(oneTicket);
            })
            .catch((err)=>{
                console.log(err);
                console.log('deleteOneTicket has failed!');
                res.status(400).json(err);
            })
    },
    updateTicket: (req,res) =>{
        Ticket.findOneAndUpdate({_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
        )
            .then((updatedTicket)=>{
                console.log(updatedTicket);
                res.json(updatedTicket);
            })
            .catch((err)=>{
                console.log(err);
                console.log('updateOneTicket has failed!');
                res.status(400).json(err);
            })
    }
}


// ================= Didn't Work ===============
// const Ticket = require("../models/ticket.model");
// const User = require("../models/user.model");
// const jwt = require("jsonwebtoken");

// const addNewTicket = async (req, res) => {
//   const { body } = req;
//   let newTicket = new Ticket(body);
//   console.log(newTicket);
//   console.log("new ticket added id", newTicket);

//    try {
//      newTicket = await newTicket.save();
//      res.json(newTicket);
//      return;
//    } catch (error) {
//      console.log("error!", error);
//      res.status(400).json(error);
//      return;
//    }

// };

// module.exports = {
//   addNewTicket,
// };