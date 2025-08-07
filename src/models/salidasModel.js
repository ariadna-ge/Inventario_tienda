const connection = require('../config/db');

function getVentasMesActual(callback) {
    const sqlQuery = `SELECT SUM(precio_total) AS total_ventas_mes FROM salidas WHERE YEAR(fecha_salida) = YEAR(CURDATE()) AND MONTH(fecha_salida) = MONTH(CURDATE());`;
    connection.query(sqlQuery, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        const totalVentas = results[0].total_ventas_mes || 0;
        callback(null, totalVentas);
    });
}

function getTotalProductos(callback) {
    const sqlQuery = `SELECT SUM(cantidad) AS total_productos FROM productos;`;
    connection.query(sqlQuery, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        const totalProductos = results[0].total_productos || 0;
        callback(null, totalProductos);
    });
}

function getCategoriasTotales(callback) {
    const sqlQuery = `SELECT COUNT(DISTINCT (categoria)) AS total_categorias FROM productos;`;
    connection.query(sqlQuery, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        const totalCategorias = results[0].total_categorias || 0;
        callback(null, totalCategorias);
    });
}

function getTotalSKU(callback) {
    const sqlQuery = `SELECT COUNT(sku) AS total_productos FROM productos;`;
    connection.query(sqlQuery, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        const totalCategorias = results[0].total_productos || 0;
        callback(null, totalCategorias);
    });
}

function getStock(callback) {
    const sqlQuery = `SELECT sku, producto, cantidad FROM productos WHERE cantidad < 20;`;
    connection.query(sqlQuery, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
}

function getTop(callback) {
    const sqlQuery = `SELECT p.sku, p.producto, SUM(s.cantidad) AS total_vendido
                        FROM salidas s JOIN productos p ON s.sku = p.sku
                            GROUP BY p.sku, p.producto ORDER BY total_vendido DESC LIMIT 3;`;
    connection.query(sqlQuery, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });

}
module.exports = {
    getVentasMesActual,
    getTotalProductos,
    getCategoriasTotales,
    getTotalSKU,
    getStock,
    getTop
};