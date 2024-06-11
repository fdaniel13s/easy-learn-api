const Curso = require('./curso.model');

const getCursos = async (req, res) => {
    try {
        const cursos = await Curso.find();
        res.json(cursos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const postCursos = async (req,res) => {
    console.log(req.body); // Agrega esta línea
    try{
        const curso = new Curso(req.body);
        const savedCurso = await curso.save();
        res.json(savedCurso);
    }catch (error){
        res.status(500).json({message:error.message});
    }
}

//Get Curso por Id

const getCursoById = async (req, res) => {
    try {
        const curso = await Curso.findById(req.params.id);
        res.json(curso);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}


module.exports = {
    getCursos,
    postCursos,
    getCursoById
};