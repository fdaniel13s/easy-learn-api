const express = require('express');
const router = express.Router();
const instructorController = require('./instructor.controller');

router.get('/login', instructorController.login);
router.get('/', instructorController.getInstructores);
router.post('/', instructorController.postInstructor);
router.get('/:id', instructorController.getInstructorById);
router.put('/:id', instructorController.putInstructorById);
router.delete('/:id', instructorController.deleteInstructorById);


module.exports = router;