-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-05-2023 a las 03:11:39
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
(7006123, 'Zoraida Zapata', 'Auxiliar contable', 'zora.zapa@mail.com', '$2b$10$yfeKUyqrNQ80SAHbE9rMk.bR3zn17EX7vorxMEbKASCqq7iGfKzY2'),
(70535734, 'Carla Carmona', 'Auxiliar contable', 'carla.carmona@mail.com', 'prueba123'),
(70546734, 'Ariel Alvarez', 'Auxiliar contable', 'ariel.alvarez@mail.com', 'prueba123'),
(71646734, 'Antonio Otalvaro', 'Auxiliar contable', 'toni.ota@mail.com', 'prueba123'),
(71756734, 'Julian Lopez', 'Auxiliar contable', 'julian.lopez@mail.com', 'prueba123'),
(71756745, 'Juliana Lopera', 'Auxiliar contable', 'juliana.lopera@mail.com', 'prueba123'),
(1234567890, 'Adrían Mina', 'Administrador', 'admin@mail.com', '$2b$10$3cvKj6R./U0h/pJbGNWd8.TEwOUsKNRDCpS8e9mFTLX8qLNv.vtZy');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
