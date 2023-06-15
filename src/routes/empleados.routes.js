import { Router } from "express";
import { createEmpleado, getEmpleados, getEmpleado } from "../controllers/empleados.controller.js";
import { authenticateToken } from "../controllers/usuarios.controller.js";

const router = Router()

router.post("/empleado", createEmpleado)
router.get("/empleados", getEmpleados)
router.get('/empleados/:id', authenticateToken, getEmpleado)

export default router