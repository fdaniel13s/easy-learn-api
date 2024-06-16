const mongoose = require('mongoose');

const MiembroSchema = new mongoose.Schema({
    usuario_id: mongoose.Schema.Types.ObjectId,
    fecha_union: Date
});

const ComentarioSchema = new mongoose.Schema({
    usuario_id: mongoose.Schema.Types.ObjectId,
    contenido: String,
    fecha_comentario: Date
});

const PublicacionSchema = new mongoose.Schema({
    usuario_id: mongoose.Schema.Types.ObjectId,
    contenido: String,
    fecha_publicacion: Date,
    comentarios: [ComentarioSchema]
});

const GrupoEstudioSchema = new mongoose.Schema({
    nombre_grupo: String,
    descripcion: String,
    fecha_creacion: Date,
    miembros: [MiembroSchema],
    publicaciones: [PublicacionSchema]
});

module.exports = mongoose.model('GrupoEstudio', GrupoEstudioSchema);