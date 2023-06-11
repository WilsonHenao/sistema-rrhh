import { Router } from "express";
import { createPostulante } from "../controllers/postulantes.controller.js";

const router = Router()

router.post('/postulantes', createPostulante)

export default router