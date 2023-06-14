import { pool } from "../db.js";

export const createVacante = async(req, res) => {
  const {id, nombre, descripcion, idCargo, idUsuario} = req.body

  pool.query('INSERT INTO vacantes (id, nombre, descripcion, idCargo, idUsuario) VALUES (?,?,?,?,?)', [id, nombre, descripcion, idCargo, idUsuario], (error, results) => {
    if (error) {
      console.error(error)
      return res.status(500).json({error: 'Ocurrió un error en la consulta'})
    }
    res.send({
      id, nombre, descripcion, idCargo, idUsuario
    });
  });
}

export const getVacantes = async(req, res) => {
  pool.query('SELECT * FROM vacantes', (error, results) => {
    if (error) {
      console.error(error)
      return res.status(500).json({error: 'Ocurrió un error en la consulta'})
    }
    res.send(results)
  })
}

export const createCargo = async(req, res) => {
  const {id, nombre} = req.body

  pool.query('INSERT INTO cargos (id, nombre) VALUES (?,?)', [id, nombre], (error, results) => {
    if (error) {
      console.error(error)
      return res.status(500).json({error: 'Ocurrió un error en la consulta'})
    }
    res.send({
      id, nombre
    });
  });
}

export const updateVacante = async (req, res) => {
  const {id} = req.params
  const {nombre, descripcion, idCargo, idUsuario} = req.body

  pool.query('UPDATE vacantes SET nombre = ?, descripcion = ?, idCargo = ?, idUsuario = ? WHERE id = ?', [nombre, descripcion, idCargo, idUsuario, id], (error, results) => {
    if (error) {
      console.error(error)
      return res.status(500).json({error: 'Ocurrió un error en la consulta'})
    }
    res.send({
      id, nombre, descripcion, idCargo, idUsuario
    });
  });
}