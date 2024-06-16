const mongoose = require('mongoose');

const InscripcionSchema = new mongoose.Schema({
    fecha_matricula: Date,
    estado: String,
    curso_id: mongoose.Schema.Types.ObjectId,
    alumno_id: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('Inscripcion', InscripcionSchema);