const mongoose = require('mongoose');

const ComentarioSchema = new mongoose.Schema({
    usuario_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },
    contenido: {
        type: String,
        required: true
    },
    fecha_comentario: {
        type: Date,
        required: false
    }
});

const ReaccionSchema = new mongoose.Schema({
    usuario_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },
    tipo_reaccion: {
        type: String,
        required: false
    },
    fecha_reaccion: {
        type: Date,
        required: false
    }
});

const PublicacionSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId, // Esta línea ha sido eliminada
    usuario_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },
    contenido: {
        type: String,
        required: false
    },
    fecha_publicacion: {
        type: Date,
        required: false
    },
    curso_id: {
        type: String,
        required: false
    },
    tipo: {
        type: String,
        required: false
    },
    comentarios: [ComentarioSchema],
    reacciones: [ReaccionSchema]
});

const Publicacion = mongoose.model('Publicacion', PublicacionSchema, 'publicaciones');

module.exports = Publicacion;