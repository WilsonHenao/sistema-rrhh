import { pool } from "../db.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const secretKey = 'toleranciaCero';

export const createUsuario = async(req, res) => {
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

export const usuarioAccess = async (req, res) => {
  const { username, password } = req.body;
  
  pool.query('SELECT * FROM usuarios WHERE usuario = ?', [username], (error, results) => {
    if (error) throw error;

    if (bcrypt.compareSync(password, results[0].contraseña)){

      const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
      
      res.send({token, results});

    } else {
      res.send({success: false})
    }
  })
}

export function authenticateToken(req, res, next) {

  const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];

  if (!token){
    return res.sendStatus(401);
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    req.user = user;
    next();
  });
}