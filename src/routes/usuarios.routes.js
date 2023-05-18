import { Router } from "express";
import { createUsuario } from "../controllers/usuarios.controller.js";

const router = Router()

router.post('/usuarios', createUsuario)

export default router