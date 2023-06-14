import { pool } from "../db.js"

export const createPostulante = async (req, res) => {
  const { id, nombre, email, telefono, idVacante } = req.body
  const estado = "Postulado"

  pool.query('INSERT INTO postulantes (id, nombre, email, telefono, estado, idVacante) VALUES (?, ?, ?, ?, ?, ?)', [id, nombre, email, telefono, estado, idVacante], (error, results) => {
    if (error) {
      console.error(error)
      return res.status(500).json({error: 'Ocurrió un error en la consulta'})
    }

    res.send({
      id, nombre, email, telefono, estado, idVacante
    });
  });
}

export const getConsultaPostulante = async (req, res) => {
  const { id } = req.params

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

export const getPostulante = async (req, res) => {
  const { id } = req.params

  pool.query('SELECT * FROM postulantes WHERE id = ?', [id], (error, results) => {
    if (error) throw error;

    res.send(results)
  })
}

export const getPostulantes = async (req, res) => {
  const postulantesResults = await new Promise((resolve, reject) => {
    pool.query('SELECT * FROM postulantes', (error, results) => {
      if (error) reject(error)
      resolve(results);
    });
  });

  const postulantes = []

  for (const postulante of postulantesResults) {
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

    postulantes.push({
      id: postulante.id,
      nombre: postulante.nombre,
      cargo,
      estado: postulante.estado
    })
  }

  res.send({
    postulantes
  })
}

export const updatePostulante = async (req, res) => {
  const {id} = req.params
  const {nombre, estado} = req.body

  pool.query('UPDATE postulantes SET nombre = ?, estado = ? WHERE id = ?', [nombre, estado, id], (error, results) => {
    if (error) {
      console.error(error)
      return res.status(500).json({error: 'Ocurrió un error en la consulta'})
    }

    res.send({
      id, nombre, estado
    })
  })
}