import express from "express";
import cors from 'cors';
import usuariosRoutes from "./routes/usuarios.routes.js";
import vacantesRoutes from "./routes/vacantes.routes.js";
import postulantesRoutes from "./routes/postulantes.routes.js";
import empleadosRoutes from "./routes/empleados.routes.js";

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', usuariosRoutes)
app.use('/api', vacantesRoutes)
app.use('/api', postulantesRoutes)
app.use('/api', empleadosRoutes)

export default app;