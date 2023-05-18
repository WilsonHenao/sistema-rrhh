import { Router } from "express";
import { createUsuario, getUsuarios } from "../controllers/usuarios.controller.js";

const router = Router()

router.post('/usuarios', createUsuario)
router.get('/usuarios', getUsuarios)

export default router