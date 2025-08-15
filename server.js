import express from "express";
import dataRoutes from "./routes/routes.js";
import path from 'path';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', dataRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})