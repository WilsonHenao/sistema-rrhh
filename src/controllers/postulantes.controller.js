import { pool } from "../db.js"

export const createPostulante = async(req, res) => {
  const {id, nombre, email, telefono, idVacante} = req.body
  const estado = "Postulado"
  
  pool.query('INSERT INTO postulantes (id, nombre, email, telefono, estado, idVacante) VALUES (?, ?, ?, ?, ?, ?)', [id, nombre, email, telefono, estado, idVacante], (error, results) => {
    if (error) throw error;

    res.send({
      id, nombre, email, telefono, estado, idVacante
    });
  });
}

export const getPostulante = async (req, res, next) => {
  const {id} = req.params

  const postulantesResults = await new Promise((resolve, reject) => {
    pool.query('SELECT * FROM postulantes WHERE id = ?', [id], (error, results) => {
      if (error) reject(error)
      resolve(results);
    });
  });

  const postulante = postulantesResults[0]
  const idVacante = postulante.idVacante

  const vacantesResults = await new Promise((resolve, reject) => {
    pool.query('SELECT * FROM vacantes WHERE id = ?', [idVacante], (error, results) => {
      if (error) reject(error)
      resolve(results);
    });
  });

  const vacante = vacantesResults[0]
  const idCargo = vacante.idCargo

  const cargosResults = await new Promise((resolve, reject) => {
    pool.query('SELECT * FROM cargos WHERE id = ?', [idCargo], (error, results) => {
      if (error) reject(error)
      resolve(results);
    });
  });

  const cargo = cargosResults[0].nombre

  res.send({
    id: postulante.id,
    nombre: postulante.nombre,
    cargo,
    estado: postulante.estado
  })
}