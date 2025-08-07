const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');
const indexController = require('../controllers/indexController');

// Rutas de Inventario
router.get('/inventario', productosController.getAll('productos', 'inventario'));
router.post('/agregar', productosController.post('productos', '/inventario'));
router.get('/productos/editar/:id_producto', productosController.getById('productos', 'agregar', 'id_producto'));
router.post('/agregar/:id_producto', productosController.updateById('productos', '/inventario', 'id_producto'));

// Rutas de Entradas
router.get('/entradas', productosController.getAll('entradas', 'entradas'));
router.post('/agregarEntrada', productosController.post('entradas', '/entradas'));

// Rutas de Salidas
router.get('/salidas', productosController.getAll('salidas', 'salidas'));
router.post('/agregarSalida', productosController.post('salidas', '/salidas'));

// Estas rutas solo manejan la respuesta
router.get('/agregar', (req, res) => {
  res.render('agregar', { producto: null });
});
router.get('/agregarSalida', (req, res) => {
  res.render('agregarSalida');
});
router.get('/agregarEntrada', (req, res) => {
  res.render('agregarEntrada');
});

router.get('/', indexController.mostrarDashboard);

module.exports = router;