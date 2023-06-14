import { Router } from "express";
import { createEmpleado, getEmpleados } from "../controllers/empleados.controller.js";

const router = Router()

router.post("/empleado", createEmpleado)
router.get("/empleados", getEmpleados)

export default router