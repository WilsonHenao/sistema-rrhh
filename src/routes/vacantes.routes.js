import { Router } from "express";
import { createCargo, createVacante, getVacantes } from "../controllers/vacantes.controller.js";

const router = Router()

router.get('/vacantes', getVacantes)
router.post('/vacantes', createVacante)
router.post('/cargo', createCargo)

export default router