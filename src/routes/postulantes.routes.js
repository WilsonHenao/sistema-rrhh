import { Router } from "express";
import { createPostulante, getConsultaPostulante, getPostulante } from "../controllers/postulantes.controller.js";

const router = Router()

router.post('/postulantes', createPostulante)
router.get('/postulantes/:id', getConsultaPostulante)
router.get('/postulante/:id', getPostulante)

export default router