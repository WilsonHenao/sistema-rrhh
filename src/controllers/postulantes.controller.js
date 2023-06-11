import { pool } from "../db.js"

export const createPostulante = async(req, res) => {
  const {id, nombre, email, telefono, idVacante} = req.body
  const estado = "Postulado"
  console.log(req.body)
  /*
  pool.query('INSERT INTO postulantes (id, nombre, email, telefono, estado, idVacante) VALUES (?, ?, ?, ?, ?, ?)', [id, nombre, email, telefono, estado, idVacante], (error, results) => {
    if (error) throw error;

    res.send({
      id, nombre, email, telefono, estado, idVacante
    });
  });*/
}