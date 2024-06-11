const express = require('express');
const router = express.Router();
const cursoController = require('./curso.controller');

router.get('/', cursoController.getCursos);

router.post('/', cursoController.postCursos);

router.get('/:id', cursoController.getCursoById);

module.exports = router; 