import { pool } from "../db.js";

export const createVacante = async(req, res) => {
  const {id, nombre, descripcion, idCargo, idUsuario} = req.body

  pool.query('INSERT INTO vacantes (id, nombre, descripcion, idCargo, idUsuario) VALUES (?,?,?,?,?)', [id, nombre, descripcion, idCargo, idUsuario], (error, results) => {
    if (error) throw error;
    res.send({
      id, nombre, descripcion, idCargo, idUsuario
    });
  });
}

export const getVacante = async(req, res) => {
  pool.query('SELECT * FROM vacantes', (error, results) => {
    if (error) throw error;
    res.send(results)
  })
}

export const createCargo = async(req, res) => {
  const {id, nombre} = req.body

  pool.query('INSERT INTO cargos (id, nombre) VALUES (?,?)', [id, nombre], (error, results) => {
    if (error) throw error;
    res.send({
      id, nombre
    });
  });
}