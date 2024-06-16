const express = require('express');
const router = express.Router();
const grupoEstudioController = require('./grupos-de-estudio.controller');

router.get('/', grupoEstudioController.getGruposDeEstudio);
router.get('/:id', grupoEstudioController.getGrupoDeEstudioById);
router.post('/', grupoEstudioController.postGrupoDeEstudio);
router.put('/:id', grupoEstudioController.putGrupoDeEstudioById);
router.delete('/:id', grupoEstudioController.deleteGrupoDeEstudioById);

module.exports = router;
