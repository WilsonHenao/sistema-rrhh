-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-06-2023 a las 11:54:08
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_example`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cargos`
--

CREATE TABLE `cargos` (
  `id` int(5) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cargos`
--

INSERT INTO `cargos` (`id`, `nombre`) VALUES
(1, 'Auxiliar de bodega'),
(2, 'Auxiliar de produccion'),
(3, 'Asistente logistico');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `tipoId` varchar(50) DEFAULT NULL,
  `edad` int(3) DEFAULT NULL,
  `sexo` varchar(50) DEFAULT NULL,
  `estadoCivil` varchar(50) DEFAULT NULL,
  `telefono` int(12) DEFAULT NULL,
  `fechaNacimiento` date DEFAULT NULL,
  `direccionResidencia` varchar(100) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `entidadEps` varchar(50) DEFAULT NULL,
  `entidadPension` varchar(50) DEFAULT NULL,
  `cargo` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id`, `nombre`, `tipoId`, `edad`, `sexo`, `estadoCivil`, `telefono`, `fechaNacimiento`, `direccionResidencia`, `email`, `entidadEps`, `entidadPension`, `cargo`) VALUES
(7309812, 'Byron Caceres', 'CC', 32, 'masculino', 'Casado', 2147483647, '1991-02-12', 'Cr 8 Cll 5', 'byron.caceres@mail.com', 'Nueva Eps', 'Colpensiones', 'Asistente logistico');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `postulantes`
--

CREATE TABLE `postulantes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `telefono` int(12) DEFAULT NULL,
  `estado` varchar(50) DEFAULT NULL,
  `idVacante` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `postulantes`
--

INSERT INTO `postulantes` (`id`, `nombre`, `email`, `telefono`, `estado`, `idVacante`) VALUES
(7309812, 'Byron Caceres', 'byron.caceres@mail.com', 2147483647, 'Finalista', 3),
(7678432, 'Yeison Ramirez', 'yeison.ramirez@mail.com', 2147483647, 'Postulado', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `cargo` varchar(50) DEFAULT NULL,
  `usuario` varchar(50) DEFAULT NULL,
  `contraseña` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `cargo`, `usuario`, `contraseña`) VALUES
(7249012, 'Aurora Contreras', 'Auxiliar Contable', 'aurora.contreras@mail.com', '$2b$10$PUmHElB6PJJ6TGoJfiL6e.q24zibvt23bLPSOvrOZ5gfTU1jBby7C'),
(70535743, 'Zoraida Zapata', 'Auxiliar Contable', 'zora.zapa@mail.com', '$2b$10$tSMo6YUEWBXPVtYFIRe5s.xoRP9.eWN2AiPI/d8Y/yL3p47.gBP.2'),
(71756745, 'Adrían Mina', 'Administrador', 'admin@mail.com', '$2b$10$3cvKj6R./U0h/pJbGNWd8.TEwOUsKNRDCpS8e9mFTLX8qLNv.vtZy'),
(72908512, 'Ana Liz Tabarez', 'Analista RRHH', 'analizta@mail.com', '$2b$10$SuxOOeIBWRLGTmV7EwAsaOMoSA/PS9/x8v8xNQgcEcJXJu0jaKkzu');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vacantes`
--

CREATE TABLE `vacantes` (
  `id` int(5) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `idCargo` int(5) DEFAULT NULL,
  `idUsuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `vacantes`
--

INSERT INTO `vacantes` (`id`, `nombre`, `descripcion`, `idCargo`, `idUsuario`) VALUES
(1, 'Auxiliar de bodega conocimientos en ofimática (Exc', 'Importante empresa del sector, requiere para su equipo de trabajo Auxiliar de bodega con experiencia mínima de 1 año en cargos relacionados, debe ser bachiller.', 1, 7006123),
(2, 'Auxiliar de producción', 'Importante empresa dedicada a la fabricación de productos metálicos para uso estructural requiere para su equipo de trabajo Auxiliar de producción.', 2, 7006123),
(3, 'Asistente de logística', 'Se solicita tecnólogo en logística o profesional recién egresado con experiencia mayor a 6 meses preferiblemente en funciones de coordinación y aseguramiento de los traslados de vehículos, seguimiento', 3, 7006123);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cargos`
--
ALTER TABLE `cargos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `postulantes`
--
ALTER TABLE `postulantes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idVacante` (`idVacante`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `vacantes`
--
ALTER TABLE `vacantes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idCargo` (`idCargo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cargos`
--
ALTER TABLE `cargos`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `vacantes`
--
ALTER TABLE `vacantes`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `postulantes`
--
ALTER TABLE `postulantes`
  ADD CONSTRAINT `idVacante` FOREIGN KEY (`idVacante`) REFERENCES `vacantes` (`id`);

--
-- Filtros para la tabla `vacantes`
--
ALTER TABLE `vacantes`
  ADD CONSTRAINT `idCargo` FOREIGN KEY (`idCargo`) REFERENCES `cargos` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
