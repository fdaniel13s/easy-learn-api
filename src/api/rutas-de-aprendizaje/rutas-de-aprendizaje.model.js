const mongoose = require('mongoose');

const CursoSchema = new mongoose.Schema({
    curso_id: mongoose.Schema.Types.ObjectId
});

const RutaAprendizajeSchema = new mongoose.Schema({
    titulo: String,
    fecha_creacion: Date,
    precio: Number,
    descripcion: String,
    cursos: [CursoSchema]
});

module.exports = mongoose.model('RutaAprendizaje', RutaAprendizajeSchema);