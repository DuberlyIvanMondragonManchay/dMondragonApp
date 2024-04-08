USE db_mondragon_app;

-- Clients
CREATE TABLE clientes (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);

INSERT INTO clientes (id, name) VALUES
(1, 'Joe'),
(2, 'Juan'),
(3, 'María'),
(4, 'Pedro'),
(5, 'Laura'),
(6, 'Carlos'),
(7, 'Ana'),
(8, 'Luis'),
(9, 'Marta'),
(10, 'David');

-- Products
CREATE TABLE productos (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);

INSERT INTO productos (id, name) VALUES
(1, 'Pizza'),
(2, 'Gaseosa'),
(3, 'Hamburguesa'),
(4, 'Sándwich'),
(5, 'Ensalada'),
(6, 'Cerveza'),
(7, 'Pasta'),
(8, 'Helado'),
(9, 'Torta'),
(10, 'Frutas');
