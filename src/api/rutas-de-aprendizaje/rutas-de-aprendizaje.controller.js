const RutasDeAprendizaje = require('./rutas-de-aprendizaje.model');

const getRutasDeAprendizaje = async (req, res) => {
    try {
        const rutasDeAprendizaje = await RutasDeAprendizaje.find();
        res.json(rutasDeAprendizaje);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getRutaDeAprendizajeById = async (req, res) => {
    try {
        const rutaDeAprendizaje = await RutasDeAprendizaje.findById(req.params.id);
        res.json(rutaDeAprendizaje);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const postRutaDeAprendizaje = async (req, res) => {
    try {
        const rutaDeAprendizaje = new RutasDeAprendizaje(req.body);
        const savedRutaDeAprendizaje = await rutaDeAprendizaje.save();
        res.json(savedRutaDeAprendizaje);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const putRutaDeAprendizajeById = async (req, res) => {
    try {
        const rutaDeAprendizaje = await RutasDeAprendizaje.findByIdAndUpdate
        (req.params.id, req.body, {new: true});
        res.json(rutaDeAprendizaje);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteRutaDeAprendizajeById = async (req, res) => {
    try {
        const rutaDeAprendizaje = await RutasDeAprendizaje.findByIdAndDelete(req.params.id);
        res.json({message: 'La ruta de aprendizaje fue eliminada'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    getRutasDeAprendizaje,
    getRutaDeAprendizajeById,
    postRutaDeAprendizaje,
    putRutaDeAprendizajeById,
    deleteRutaDeAprendizajeById
}