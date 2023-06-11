CREATE DATABASE IF NOT EXISTS db_example;

CREATE TABLE usuario (
  id INT(11) NOT NULL PRIMARY KEY,
  nombre VARCHAR(50),
  cargo VARCHAR(50),
  usuario VARCHAR(50),
  contraseña VARCHAR(200)
);

CREATE TABLE cargo (
  id INT(5) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) 
);

CREATE TABLE vacante (
  id INT(5) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50),
  descripcion VARCHAR(200),
  idCargo INT(5),
  idUsuario INT(11)
);

ALTER TABLE vacante
ADD CONSTRAINT idCargo FOREIGN KEY (idCargo) REFERENCES cargo(id);

ALTER TABLE vacante
ADD CONSTRAINT idUsuario FOREIGN KEY (idUsuario) REFERENCES usuario(id);  


CREATE TABLE postulante (
  id INT(5) NOT NULL PRIMARY KEY,
  nombre VARCHAR(50),
  email VARCHAR(50),
  telefono INT(12),
  estado VARCHAR(50),
  idVacante INT(5)
);

ALTER TABLE postulante
ADD CONSTRAINT idVacante FOREIGN KEY (idVacante) REFERENCES vacante(id);
