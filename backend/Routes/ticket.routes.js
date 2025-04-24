import express from 'express';
// import { bookRoom, cancelRoom, checkoutRoom, createTicket, deleteRoomById, getAllRooms, getBookings, getRoomById, updateRoom } from '../Controllers/ticket.controller.js';
import { isAuthenticated,validateUser } from '../Middlewares/protectedRoutes.js';


// export const roomRoutes = express.Router();



// roomRoutes.get("/",getAllRooms)
// roomRoutes.get("/getrooms/:id",getRoomById)
// roomRoutes.put("/book/:id",validateUser, bookRoom)

// roomRoutes.put("/cancel/:id",validateUser,cancelRoom)


// roomRoutes.put("/checkout/:id",validateUser,checkoutRoom)
// roomRoutes.get("/getbookings/:userId",validateUser,getBookings)




// roomRoutes.delete("/delete/:id", validateUser,deleteRoomById);


export const ticketRouter = express.Router();

import {
  createTicket,
  getAllTickets,
  getTicketById,
  updateTicket
} from '../Controllers/ticket.controller.js'

ticketRouter.get('/', isAuthenticated, getAllTickets); // all for admin, only own for user
ticketRouter.get('/:id', isAuthenticated, getTicketById);

ticketRouter.post("/create",isAuthenticated,createTicket)

ticketRouter.put("/update/:id",validateUser,updateTicket)

// module.exports = {ticketRouter};
