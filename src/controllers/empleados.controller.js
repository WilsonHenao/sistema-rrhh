import { pool } from "../db.js";

export const createEmpleado = async(req, res) => {
  const { id, nombre, tipoId, edad, sexo, estadoCivil, telefono, fechaNacimiento, direccionResidencia, email, entidadEps, entidadPension, cargo } = req.body

  pool.query('INSERT INTO empleados (id, nombre, tipoId, edad, sexo, estadoCivil, telefono, fechaNacimiento, direccionResidencia, email, entidadEps, entidadPension, cargo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [id, nombre, tipoId, edad, sexo, estadoCivil, telefono, fechaNacimiento, direccionResidencia, email, entidadEps, entidadPension, cargo], (error, results) => {
    if (error) {
      console.error(error)
      return res.status(500).json({error: 'Ocurrió un error en la consulta'})
    }

    res.send({
      success: true
    }) 
  })
}

export const getEmpleados = async (req, res) => {
  pool.query('SELECT * FROM empleados', (error, results) => {
    if (error) {
      console.error(error)
      return res.status(500).json({error: 'Ocurrió un error en la consulta'})
    }

    res.send(results)
  })
}