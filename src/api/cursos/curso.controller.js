const Curso = require('./curso.model');

const getCursos = async (req, res) => {
    try {
        const cursos = await Curso.find();
        res.json(cursos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Métodos CRUD
// Representando e CREATE con POST
const postCurso = async (req, res) => {
    console.log(req.body); // Agrega esta línea
    try{
        const curso = new Curso(req.body);
        const savedCurso = await curso.save();
        res.json(savedCurso);
    }catch (error){
        res.status(500).json({message:error.message});
    }
}

//Representando el READ con GET
//Get Curso por Id
const getCursoById = async (req, res) => {
    try {
        const curso = await Curso.findById(req.params.id);
        res.json(curso);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Representando el UPDATE con PUT
//Put Curso por Id
const putCursoById = async (req, res) => {
    try {
        const curso = await
        Curso.findByIdAndUpdate(req.params.id , req.body , {new: true});
        res.json(curso);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Representando el DELETE con DELETE
//Delete Curso por Id
const deleteCursoById = async (req, res) => {
    try {
        const curso = await Curso.findByIdAndDelete(req.params.id);
        res.json({message: 'El curso fue eliminado'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    getCursos,
    postCursos: postCurso,
    getCursoById,
    putCursoById,
    deleteCursoById
};