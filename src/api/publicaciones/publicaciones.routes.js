const express = require('express');
const router = express.Router();
const publicacionesController = require('./publicaciones.controller');

router.get('/', publicacionesController.getPublicaciones);
router.get('/:id', publicacionesController.getPublicacionById);
router.post('/', publicacionesController.postPublicacion);
router.delete('/:id', publicacionesController.deletePublicacion);
router.post('/:id/comentarios', publicacionesController.postComentario); // Línea agregada

module.exports = router;