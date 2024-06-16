const RutasDeAprendizajeController = require('./rutas-de-aprendizaje.controller');

const express = require('express');
const router = express.Router();

router.get('/', RutasDeAprendizajeController.getRutasDeAprendizaje);
router.post('/', RutasDeAprendizajeController.postRutaDeAprendizaje);
router.get('/:id', RutasDeAprendizajeController.getRutaDeAprendizajeById);
router.put('/:id', RutasDeAprendizajeController.putRutaDeAprendizajeById);
router.delete('/:id', RutasDeAprendizajeController.deleteRutaDeAprendizajeById);

module.exports = router;
