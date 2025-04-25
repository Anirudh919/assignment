import express from "express";
import {
  isAuthenticated,
  validateUser,
} from "../Middlewares/protectedRoutes.js";
import {
  createNotes,
  getMyNotes,
  getNoteById,
  updateNote,
} from "../Controllers/notes.controllers.js";

export const notesRouter = express.Router();

notesRouter.post("/create-notes", validateUser, createNotes); // all for admin, only own for user
notesRouter.get("/my-notes", validateUser, getMyNotes);

notesRouter.get("/:id", getNoteById);

notesRouter.put("/update/:id", updateNote);

// module.exports = {ticketRouter};
