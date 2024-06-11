const express = require('express')
const app = express()
const port = 3000
const cursosRoutes = require('./api/cursos/curso.routes');
const connectDB = require('./config/db');

// Añade esta línea para analizar el cuerpo de las solicitudes JSON
app.use(express.json());

connectDB();

app.use('/api/cursos', cursosRoutes);

app.listen(port, () => {
    console.log(`Easy learn API listening on port ${port}`)
})