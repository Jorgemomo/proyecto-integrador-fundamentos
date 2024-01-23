CREATE TABLE Personas (
    ID INT PRIMARY KEY,
    Nombre VARCHAR(100),
    Apellido VARCHAR(100),
    Edad INT,
    Cedula VARCHAR(50)
);

CREATE TABLE Animales (
    ID INT PRIMARY KEY,
    Nombre VARCHAR(100),
    Genero VARCHAR(50),
    Raza VARCHAR(100)
);

CREATE TABLE Veterinaria (
    ID INT PRIMARY KEY,
    Nombre VARCHAR(100),
    Direccion VARCHAR(200),
    Telefono VARCHAR(50)
);

