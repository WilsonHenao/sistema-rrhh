import { Router } from "express";
import { createPostulante, getPostulante } from "../controllers/postulantes.controller.js";

const router = Router()

router.post('/postulantes', createPostulante)
router.get('/postulantes/:id', getPostulante)

export default router