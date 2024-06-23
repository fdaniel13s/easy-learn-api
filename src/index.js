const express = require('express')
const app = express();
const cors = require('cors');
app.use(cors());



const port = 3000
const cursosRoutes = require('./api/cursos/curso.routes');
const alumnosRoutes = require('./api/alumnos/alumno.routes');
const gruposDeEstudioRoutes = require('./api/grupos-de-estudio/grupos-de-estudio.routes');
const instructoresRoutes = require('./api/instructores/intructor.routes');
const inscripcionesRoutes = require('./api/inscripciones/inscripcion.routes');
const rutasDeAprendizajeRoutes = require('./api/rutas-de-aprendizaje/rutas-de-aprendizaje.routes');
const publicacionesRoutes = require('./api/publicaciones/publicaciones.routes');
const connectDB = require('./config/db');
app.use(express.json());

connectDB();

//Aquí definimos las rutas de nuestro servidor
app.use('/api/cursos', cursosRoutes);
app.use('/api/alumnos', alumnosRoutes);
app.use('/api/grupos-de-estudio', gruposDeEstudioRoutes);
app.use('/api/instructores', instructoresRoutes);
app.use('/api/inscripciones', inscripcionesRoutes);
app.use('/api/rutas-de-aprendizaje', rutasDeAprendizajeRoutes);
app.use('/api/publicaciones', publicacionesRoutes);

app.listen(port, () => {
    console.log(`Easy learn API listening on port ${port}`)
})

//TODO: Realizar la validación al post de un instructor o alumno si es que con ese correo y nombre existe.

