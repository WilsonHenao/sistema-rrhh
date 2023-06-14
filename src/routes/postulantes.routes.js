import { Router } from "express";
import { createPostulante, getConsultaPostulante, getPostulante, getPostulantes, updatePostulante } from "../controllers/postulantes.controller.js";
import { authenticateToken } from "../controllers/usuarios.controller.js";

const router = Router()

router.post('/postulantes', createPostulante)
router.get('/postulantes/:id', getConsultaPostulante)
router.get('/postulante/:id', getPostulante)
router.get('/postulantes', authenticateToken, getPostulantes)
router.put('/postulante/:id', authenticateToken, updatePostulante)

export default router