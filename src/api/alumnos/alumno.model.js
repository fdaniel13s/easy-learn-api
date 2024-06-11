const mongoose = require('mongoose');

const SuscripcionSchema = new mongoose.Schema({
    precio: Number,
    descripcion: String,
    activo: Boolean
});

const CertificadoSchema = new mongoose.Schema({
    fecha_emision: Date,
    fecha_caducidad: Date,
    curso_id: mongoose.Schema.Types.ObjectId
});

const ComentarioSchema = new mongoose.Schema({
    comentario: String,
    fecha_comentario: Date
});

const ForoSchema = new mongoose.Schema({
    tema: String,
    comentarios: [ComentarioSchema]
});

const AlumnoSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    correo: String,
    suscripciones: [SuscripcionSchema],
    certificados: [CertificadoSchema],
    foros: [ForoSchema]
},{versionKey:false});

module.exports = mongoose.model('Alumno', AlumnoSchema);