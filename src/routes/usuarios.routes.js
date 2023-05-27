import { Router } from "express";
import { authenticateToken, createUsuario, getUsuarios, usuarioAccess } from "../controllers/usuarios.controller.js";

const router = Router()

router.post('/usuarios', authenticateToken, createUsuario)
router.post('/login', usuarioAccess)
router.get('/usuarios', authenticateToken, getUsuarios)

export default router