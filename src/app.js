import express from "express";
import cors from 'cors';
import usuariosRoutes from "./routes/usuarios.routes.js";
import vacanteRoutes from "./routes/vacantes.routes.js";

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', usuariosRoutes)
app.use('/api', vacanteRoutes)

export default app;