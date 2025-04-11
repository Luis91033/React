/** @format */
import express from "express";
import colors from "colors";
import cors, { CorsOptions } from "cors";
import morgan from "morgan";
import router from "./router";
import db from "./config/db";
import swaggerUi from "swagger-ui-express";
import swaggerSpec, { swaggerUiOptions } from "./config/swagger";

//Connect to db

async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
    console.log(colors.green.bold("Conexión exitosa a la BD"));
  } catch (error) {
    console.log(error);
    console.log(colors.red.bold("Hubo un error al conecta a la DB"));
  }
}
connectDB();

//Express instance
const server = express();

//Availabel conections
const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    if (origin === process.env.FRONTEND_URL) {
      callback(null, true);
    } else {
      callback(new Error("Error de Cors"));
    }
  },
};

server.use(cors(corsOptions));

//Read data from forms
server.use(express.json());

server.use(morgan("dev"));

//Routing
server.use("/api/products", router);

// Docs
server.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default server;
