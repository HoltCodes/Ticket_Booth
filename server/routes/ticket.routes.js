const TicketController = require("../controllers/ticket.controller");

module.exports = (app) => {

  app.post("/api/tickets", TicketController.createNewTicket);

  app.get("/api/tickets", TicketController.findAllTicket);

  app.put("/api/tickets/:id", TicketController.updateTicket);

  app.delete("/api/tickets/:id", TicketController.deleteOneTicket);

  app.get("/api/tickets/:id", TicketController.findOneTicket);

};