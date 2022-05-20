const TicketController = require("../controllers/ticket.controller");
const jwtMiddleware = require("../middleware/jwt.middleware");

module.exports = (app) => {

  app.post("/api/tickets", TicketController.addNewTicket);

  app.get("/api/tickets", TicketController.findAllTickets);

  app.put("/api/tickets/:id", TicketController.updateTicket);

  app.delete("/api/tickets/:id", TicketController.deleteOneTicket);

  app.get("/api/tickets/:id", TicketController.findOneTicket);

};