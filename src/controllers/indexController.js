const salidasModel = require('../models/salidasModel');

function mostrarDashboard(req, res) {
    const date = new Date();
    const currentDay = date.toLocaleDateString('es-MX', { weekday: 'long' });
    const currentDate = date.toLocaleDateString('es-MX', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Usar promesas para manejar las llamadas asíncronas de manera más limpia
    Promise.all([
        new Promise((resolve, reject) => {
            salidasModel.getVentasMesActual((err, totalVentas) => {
                if (err) return reject(err);
                resolve(totalVentas);
            });
        }),
        new Promise((resolve, reject) => {
            salidasModel.getTotalProductos((err, totalProductos) => {
                if (err) return reject(err);
                resolve(totalProductos);
            });
        }),
        new Promise((resolve, reject) => {
            salidasModel.getCategoriasTotales((err, totalCategorias) => {
                if (err) return reject(err);
                resolve(totalCategorias);
            });
        }),
        new Promise((resolve, reject) => {
            salidasModel.getTotalSKU((err, totalSKU) => {
                if (err) return reject(err);
                resolve(totalSKU);
            });
        }),
        new Promise((resolve, reject) => {
            salidasModel.getStock((err, stock) => {
                if (err) return reject(err);
                resolve(stock);
            });
        }),
        new Promise((resolve, reject) => {
            salidasModel.getTop((err, topVentas) => {
                if (err) return reject(err);
                resolve(topVentas);
            });
        })
    ])
    .then(([totalVentas, totalProductos, totalCategorias, totalSKU, stockBajo, topVentas]) => {
        // Renderiza la vista una sola vez con todos los datos
        res.render('index', {
            currentDay: currentDay,
            currentDate: currentDate,
            ventas: totalVentas,
            totalInventario: totalProductos,
            categorias: totalCategorias,
            skuTotal: totalSKU,
            stockBajo: stockBajo,
            topVentas: topVentas
        });
    })
    .catch(err => {
        console.error('Error al obtener datos para el dashboard:', err);
        res.render('error', { message: 'Ocurrió un error al cargar el dashboard.' });
    });
}

module.exports = {
    mostrarDashboard
};