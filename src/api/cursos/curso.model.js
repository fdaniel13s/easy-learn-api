const mongoose = require('mongoose');

const CursoSchema = new mongoose.Schema({
    titulo: String,
    descripcion: String,
    precio: Number,
    categoria: String,
    fecha_creacion: Date,
    ultima_actualizacion: Date,
    nivel: String,
    instructor: mongoose.Schema.Types.ObjectId, // Agregamos el campo instructor aquí
    lecciones: [
        {
            titulo: String,
            url: String,
            tipo: String,
            recursos: [String]
        }
    ],
    comentarios_valoracion: [
        {
            comentario: String,
            estrella: Number
        }
    ]
},{versionKey:false });

module.exports = mongoose.model('Curso', CursoSchema);