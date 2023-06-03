import { Router } from "express";
import { authenticateToken, createUsuario, getUsuarios, updateUsuario, usuarioAccess } from "../controllers/usuarios.controller.js";

const router = Router()

router.post('/usuarios', authenticateToken, createUsuario)
router.post('/login', usuarioAccess)
router.get('/usuarios', authenticateToken, getUsuarios)
router.put('/usuarios/:id', authenticateToken, updateUsuario)

export default router