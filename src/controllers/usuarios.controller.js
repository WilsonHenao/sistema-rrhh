import { pool } from "../db.js";
import bcrypt from "bcrypt";

export const createUsuario = async (req, res) => {
  const {id, nombre, cargo, usuario, password} = req.body
  const pass = bcrypt.hashSync(password, 10)
  pool.query('INSERT INTO usuarios (id, nombre, cargo, usuario, contraseña) VALUES (?,?,?,?,?)', [id, nombre, cargo, usuario, pass], (error, results) => {
    if (error)
      throw error;
    res.send({
      id, nombre, cargo, usuario, pass
    });
  });
}

export const getUsuarios = async (req, res) => {
  pool.query('SELECT * FROM usuarios', (error, results) => {
    if (error) throw error;
    res.send(results)
  })
}