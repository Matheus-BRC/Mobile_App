import express from "express";
import { router } from "./routes";
import "reflect-metadata";
import "./database/index";

const app = express();
app.use(express.json());
app.use(router);

console.log("Start Server: 3000");  // imprime no console
app.listen(3000);                   // inicia o servidor na porta 3000