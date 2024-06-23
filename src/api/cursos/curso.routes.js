const express = require('express');
const router = express.Router();
const cursoController = require('./curso.controller');

router.get('/', cursoController.getCursos);

router.post('/', cursoController.postCursos);

router.get('/instructor/:id', cursoController.getCursoByInstructorId);

router.get('/:id', cursoController.getCursoById);

router.put('/:id', cursoController.putCursoById);

router.delete('/:id', cursoController.deleteCursoById);


module.exports = router; 