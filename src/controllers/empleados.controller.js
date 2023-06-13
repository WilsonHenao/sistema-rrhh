import { pool } from "../db.js";

export const createEmpleado = async(req, res) => {
  const { id, nombre, tipoId, edad, sexo, estadoCivil, telefono, fechaNacimiento, direccionResidencia, email, entidadEps, entidadPension } = req.body

  pool.query('INSERT INTO empleados (id, nombre, tipoId, edad, sexo, estadoCivil, telefono, fechaNacimiento, direccionResidencia, email, entidadEps, entidadPension) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [id, nombre, tipoId, edad, sexo, estadoCivil, telefono, fechaNacimiento, direccionResidencia, email, entidadEps, entidadPension], (error, results) => {
    if (error) throw (error)

    res.send({
      success: true
    })
  })
}

export const getEmpleados = async (req, res) => {
  pool.query('SELECT * FROM empleados', (error, results) => {
    if (error) throw error

    res.send(results)
  })
}