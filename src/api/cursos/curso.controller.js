const Curso = require('./curso.model');

const getCursos = async (req, res) => {
    try {
        const cursos = await Curso.find();
        res.json(cursos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    getCursos
};