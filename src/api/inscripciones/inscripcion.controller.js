const Inscripcion = require('./inscripcion.model');

const getInscripciones = async (req, res) => {
    try {
        const inscripciones = await Inscripcion.find();
        res.json(inscripciones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getInscripcionById = async (req, res) => {
    try {
        const inscripcion = await Inscripcion.findById(req.params.id);
        res.json(inscripcion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const postInscripcion = async (req, res) => {
    try {
        const inscripcion = new Inscripcion(req.body);
        const savedInscripcion = await inscripcion.save();
        res.json(savedInscripcion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const putInscripcionById = async (req, res) => {
    try {
        const inscripcion = await Inscripcion.findByIdAndUpdate
        (req.params.id, req.body, {new: true});
        res.json(inscripcion);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteInscripcionById = async (req, res) => {
    try {
        const inscripcion = await Inscripcion.findByIdAndDelete(req.params.id);
        res.json({message: 'La inscripcion fue eliminada'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    getInscripciones,
    getInscripcionById,
    postInscripcion,
    putInscripcionById,
    deleteInscripcionById
}