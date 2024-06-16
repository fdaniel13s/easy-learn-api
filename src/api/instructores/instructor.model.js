const mongoose = require('mongoose');

const CursoSchema = new mongoose.Schema({
    curso_id: mongoose.Schema.Types.ObjectId
});

const InstructorSchema = new mongoose.Schema({
    nombre: String,
    correo: String,
    telefono: String,
    fecha_creacion: Date,
    cursos: [CursoSchema]
},{versionKey:false });

module.exports = mongoose.model('Instructor', InstructorSchema, 'instructores');