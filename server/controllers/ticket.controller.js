const Ticket = require("../models/ticket.model");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const addNewTicket = async (req, res) => {
  const { body } = req;
  let newTicket = new Ticket(body);
  console.log(newTicket);
  let decodeJwt;

  // Middleware gets rid of this code!

  // try {
  //   decodeJwt = await jwt.verify(
  //   req.cookies.usertoken,
  //   process.env.SECRET_KEY,
  //   );
  //   console.log("Success", decodeJwt);
  // } catch (error) {
  //   console.log("TOKEN ERROR");
  //   res.status(400).json({ errorMessage: "You must be logged in to do that!"});
  //   return;
  // }

  // Middleware does not get rid of this code.
  
  // console.log("TOKEN", decodeJwt);
  // console.log("ID: ", decodeJwt.payload.id);

     newTicket.user_id = decodeJwt.id;
     console.log("new ticket added id", newTicket);
   try {
     newTicket = await newTicket.save();
     res.json(newTicket)
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