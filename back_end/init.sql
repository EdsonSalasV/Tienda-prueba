DROP TABLE IF EXISTS usuarios cascade;
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(60) NOT NULL,
    direccion VARCHAR(250),
    UNIQUE(email)
);

DROP TABLE IF EXISTS productos cascade;
CREATE TABLE productos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    valor INTEGER NOT NULL,
    descripcion VARCHAR(250),
    tiempo_de_envio INTEGER NOT NULL,
    dimensiones VARCHAR(50),
    img_path VARCHAR(250) NOT NULL,
    UNIQUE(nombre)
);

DROP TABLE IF EXISTS pedidos cascade;
CREATE TABLE pedidos (
    id SERIAL PRIMARY KEY,
    monto_pagado INTEGER NOT NULL,
    descripcion VARCHAR(450),
    usuario_id INTEGER NOT NULL,
    fecha_de_entrega DATE,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

SELECT * FROM productos;
SELECT * FROM usuarios;
SELECT * FROM pedidos;
