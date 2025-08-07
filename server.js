// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const userRoutes = require('./src/routes/routes');

const app = express();

// Middleware para archivos estáticos
app.use(express.static(path.join(__dirname, 'src/public')));

// Configuración del body parser
app.use(bodyParser.urlencoded({ extended: true }));

// Configuración de EJS
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

// Rutas definidas en routes.js
app.use('/', userRoutes);

// Inicializa el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

