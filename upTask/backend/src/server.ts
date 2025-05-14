/** @format */

import express from "express";
import dotev from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { corsConfig } from "./config/cors";
import { connectDB } from "./config/db";
import projectRoutes from "./routes/projectRoutes";
import authRoutes from "./routes/authRoutes";

dotev.config();

connectDB();
const app = express();

//Prevent CORS errors
app.use(cors(corsConfig));
//Logging
app.use(morgan("dev"));
//Leer datos del formulario
app.use(express.json());

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);

export default app;
