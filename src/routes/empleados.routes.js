import { Router } from "express";
import { createEmpleado } from "../controllers/empleados.controller.js";

const router = Router()

router.post("/empleado", createEmpleado)

export default router