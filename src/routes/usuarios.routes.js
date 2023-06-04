import { Router } from "express";
import { authenticateToken, createUsuario, getUsuario, getUsuarios, updateUsuario, usuarioAccess } from "../controllers/usuarios.controller.js";

const router = Router()

router.post('/usuarios', authenticateToken, createUsuario)
router.post('/login', usuarioAccess)
router.get('/usuarios', authenticateToken, getUsuarios)
router.put('/usuarios/:id', authenticateToken, updateUsuario)
router.get('/usuarios/:id', authenticateToken, getUsuario)

export default router