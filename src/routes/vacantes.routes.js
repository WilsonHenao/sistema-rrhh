import { Router } from "express";
import { createCargo, createVacante, getVacante } from "../controllers/vacantes.controller.js";

const router = Router()

router.get('/vacantes', getVacante)
router.post('/vacantes', createVacante)
router.post('/cargo', createCargo)

export default router