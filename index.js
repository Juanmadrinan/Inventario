const express = require('express');
const bodyParser = require('body-parser');
require('./database/database');

const usuarioRoutes = require('./src/routes/usuarioRoutes');
const inventarioRoutes = require('./src/routes/inventarioRoutes');
const estadoEquipoRoutes = require('./src/routes/estadoEquipoRoutes');
const marcaEquipoRoutes = require('./src/routes/marcaEquipoRoutes');
const tipoEquipoRoutes = require('./src/routes/tipoEquipoRoutes');

const index = express();

// Middleware
index.use(bodyParser.json());

index.use('/api/usuarios', usuarioRoutes);
index.use('/api/inventarios', inventarioRoutes);
index.use('/api/estado-equipos', estadoEquipoRoutes);
index.use('/api/marcas', marcaEquipoRoutes);
index.use('/api/tipo-equipos', tipoEquipoRoutes);

const PORT = process.env.PORT || 5000;
index.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
