const GruposDeEstudio = require('./grupos-de-estudio.model');


const getGruposDeEstudio = async (req, res) => {
    try {
        const gruposDeEstudio = await GruposDeEstudio.find();
        res.json(gruposDeEstudio);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getGrupoDeEstudioById = async (req, res) => {
    try {
        const grupoDeEstudio = await GruposDeEstudio.findById(req.params.id);
        res.json(grupoDeEstudio);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const postGrupoDeEstudio = async (req, res) => {
    try {
        const grupoDeEstudio = new GruposDeEstudio(req.body);
        const savedGrupoDeEstudio = await grupoDeEstudio.save();
        res.json(savedGrupoDeEstudio);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const putGrupoDeEstudioById = async (req, res) => {
    try {
        const grupoDeEstudio = await GruposDeEstudio.findByIdAndUpdate
        (req.params.id, req.body, {new: true});
        res.json(grupoDeEstudio);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteGrupoDeEstudioById = async (req, res) => {
    try {
        const grupoDeEstudio = await GruposDeEstudio.findByIdAndDelete(req.params.id);
        res.json({message: 'El grupo de estudio fue eliminado'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    getGruposDeEstudio,
    getGrupoDeEstudioById,
    postGrupoDeEstudio,
    putGrupoDeEstudioById,
    deleteGrupoDeEstudioById
}