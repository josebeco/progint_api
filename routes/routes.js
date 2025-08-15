import { Router } from "express";
import { getAllDados } from "../controllers/controller.js";

const rota = Router();


rota.get('/db', getAllDados);

export default rota;