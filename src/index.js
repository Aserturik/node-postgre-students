import express, { json } from "express";
import { PORT } from "./config.js";
import studentRoutes from "./routes/students.routes.js";

const app = express();

app.use(express.json());
app.use(studentRoutes);

app.listen(PORT);
console.log("server escuchando en el puerto", PORT);

