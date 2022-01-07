USE master
GO

DROP DATABASE IF EXISTS DBARS;
CREATE DATABASE DBARS
GO

USE DBARS;
GO
DROP TABLE IF EXISTS Empleados;
CREATE TABLE Empleados
(
    empleadoId VARCHAR(100) NOT NULL DEFAULT newid() PRIMARY KEY,
    paisId INT NOT NULL,
    codigoEmpleado VARCHAR(256) NOT NULL,
    identificacionId INT NOT NULL,
    numeroIdentificacion VARCHAR(256) NOT NULL,
    nombres VARCHAR(256) NOT NULL,
    apellidos VARCHAR(256) NOT NULL,
    fechaNacimiento DATE NOT NULL,
    fechaAlta DATE NOT NULL,
    fechaBaja DATE,
    estadoId INT NOT NULL,
    generoId INT NOT NULL,
    UNIQUE(codigoEmpleado),UNIQUE(identificacionId,numeroIdentificacion)
);

DROP TABLE IF EXISTS CatalogoEstadoEmpleado;
CREATE TABLE CatalogoEstadoEmpleado
(
    estadoId INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL
    UNIQUE(Nombre)
);

DROP TABLE IF EXISTS CatalogoGeneroEmpleado;
CREATE TABLE CatalogoGeneroEmpleado
(
    generoId INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL
    UNIQUE(Nombre)
);

DROP TABLE IF EXISTS CatalogoIdentificacionEmpleado;
CREATE TABLE CatalogoIdentificacionEmpleado
(
    IdentificacionId INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL
    UNIQUE(Nombre)
);

DROP TABLE IF EXISTS CatalogoPais;
CREATE TABLE CatalogoPais
(
    PaisId INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL
    UNIQUE(Nombre)
);

DROP TABLE IF EXISTS DetalleFotoEmpleado;
CREATE TABLE DetalleFotoEmpleado
(
    FotoId INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    empleadoId VARCHAR(100) NOT NULL,
    Nombre VARCHAR(100) NOT NULL,
    Extension VARCHAR(100) NOT NULL,
    Ubicacion VARCHAR(100) NOT NULL    
);

USE DBARS;
--INSERCION DE DATOS
INSERT INTO CatalogoEstadoEmpleado VALUES ('Activo');
INSERT INTO CatalogoEstadoEmpleado VALUES ('Inactivo');
INSERT INTO CatalogoGeneroEmpleado VALUES ('Masculino');
INSERT INTO CatalogoGeneroEmpleado VALUES ('Femenino');
INSERT INTO CatalogoIdentificacionEmpleado VALUES ('Cedula');
INSERT INTO CatalogoIdentificacionEmpleado VALUES ('Pasaporte');
INSERT INTO CatalogoIdentificacionEmpleado VALUES ('Tarjeta de Identidad');
INSERT INTO CatalogoPais VALUES ('Guatemala');
INSERT INTO CatalogoPais VALUES ('Honduras');
INSERT INTO CatalogoPais VALUES ('El Salvador');
INSERT INTO CatalogoPais VALUES ('Mexico');
INSERT INTO Empleados VALUES ('asda123','1','123','1','111111','Francisco','Estrada','1988-08-21','2015-04-01',NULL,'1','1');
