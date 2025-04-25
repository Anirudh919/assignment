import express from "express";
import { getUsers, login, signup } from "../Controllers/auth.controller.js";
import { isAuthenticated } from "../Middlewares/protectedRoutes.js";

export const authRoutes = express.Router();

authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.get("/users", isAuthenticated, getUsers);
