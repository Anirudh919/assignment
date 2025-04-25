import express from "express";
import { isAuthenticated } from "../Middlewares/protectedRoutes.js";

export const ticketRouter = express.Router();

import {
  createTicket,
  deleteTicketById,
  getAllTickets,
  getMyTickets,
  getTicketById,
  updateTicket,
} from "../Controllers/ticket.controller.js";

ticketRouter.get("/", getAllTickets); // all for admin, only own for user
ticketRouter.get("/my-tickets", getMyTickets);

ticketRouter.get("/:id", getTicketById);

ticketRouter.delete("/:id", deleteTicketById);

ticketRouter.post("/create", createTicket);

ticketRouter.put("/update/:id", updateTicket);

// module.exports = {ticketRouter};
