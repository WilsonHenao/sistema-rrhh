import { pool } from "../db.js";

export const createVacante = async(req, res) => {
  const {id, nombre, descripcion, idCargo, idUsuario} = req.body

  pool.query('INSERT INTO vacante (id, nombre, descripcion, idCargo, idUsuario) VALUES (?,?,?,?,?)', [id, nombre, descripcion, idCargo, idUsuario], (error, results) => {
    if (error) throw error;
    res.send({
      id, nombre, descripcion, idCargo, idUsuario
    });
  });
}

export const getVacante = async(req, res) => {
  pool.query('SELECT * FROM vacante', (error, results) => {
    if (error) throw error;
    res.send(results)
  })
}

export const createCargo = async(req, res) => {
  const {id, nombre} = req.body

  pool.query('INSERT INTO cargo (id, nombre) VALUES (?,?)', [id, nombre], (error, results) => {
    if (error) throw error;
    res.send({
      id, nombre
    });
  });
}