const express = require('express');
const router = express.Router();
const alumnoController = require('./alumno.controller');

router.get('/', alumnoController.getAlumnos);
router.post('/', alumnoController.postAlumno);
router.get('/:id', alumnoController.getAlumnoById);
router.put('/:id', alumnoController.putAlumnoById);
router.delete('/:id', alumnoController.deleteAlumnoById);

module.exports = router;