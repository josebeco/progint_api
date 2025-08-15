import { Router } from "express";
import { getAllDados } from "../controllers/controller.js";

const rota = Router();


rota.get('/bd', getAllDados);

export default rota;