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
    Nombre VARCHAR(100) NOT NULL,
    Habilitado BIT NOT NULL DEFAULT 1,
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