const express = require('express');
const router = express.Router();
const inscripcionController = require('./inscripcion.controller');

router.get('/', inscripcionController.getInscripciones);
router.post('/', inscripcionController.postInscripcion);
router.get('/:id', inscripcionController.getInscripcionById);
router.put('/:id', inscripcionController.putInscripcionById);
router.delete('/:id', inscripcionController.deleteInscripcionById);

module.exports = router;

