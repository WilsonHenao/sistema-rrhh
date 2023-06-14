import { Router } from "express";
import { createCargo, createVacante, getVacantes, updateVacante } from "../controllers/vacantes.controller.js";
import { authenticateToken } from "../controllers/usuarios.controller.js";

const router = Router()

router.get('/vacantes', getVacantes)
router.post('/vacantes', createVacante)
router.post('/cargo', createCargo)
router.put('/vacantes/:id', authenticateToken, updateVacante)

export default router