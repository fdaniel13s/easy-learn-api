const express = require('express');
const router = express.Router();
const cursoController = require('./curso.controller');

router.get('/', cursoController.getCursos);

module.exports = router; 