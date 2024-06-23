const express = require('express');
const router = express.Router();
const alumnoController = require('./alumno.controller');

router.get('/login', alumnoController.login);
router.get('/', alumnoController.getAlumnos);
router.post('/', alumnoController.postAlumno);
router.get('/:id', alumnoController.getAlumnoById);
router.put('/:id', alumnoController.putAlumnoById);
router.put('/update/:id',alumnoController.updateAlumno);
router.delete('/:id', alumnoController.deleteAlumnoById);

module.exports = router;