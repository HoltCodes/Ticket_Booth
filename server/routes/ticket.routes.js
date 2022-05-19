const TicketController = require("../controllers/ticket.controller");
const jwtMiddleware = require("../middleware/jwt.middleware");

module.exports = (app) => {

  app.post("/api/ticket", jwtMiddleware.authenticateJwt,TicketController.addNewTicket);

};