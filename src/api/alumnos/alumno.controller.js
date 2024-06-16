const Alumno = require('./alumno.model');

//Métodos CRUD

// Representando e CREATE con POST
const postAlumno = async (req, res) => {
    console.log(req.body); // Agrega esta línea
    try{
        const alumno = new Alumno(req.body);
        const savedAlumno = await alumno.save();
        res.json(savedAlumno);
    }catch (error){
        res.status(500).json({message:error.message});
    }
}

//Representando el READ con GET

//Get Todos los alumnos y por id

const getAlumnos = async (req, res) => {
    try {
        const alumnos = await Alumno.find();
        res.json(alumnos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getAlumnoById = async (req, res) => {
    try {
        const alumno = await Alumno.findById(req.params.id);
        res.json(alumno);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Representando el UPDATE con PUT
//Put Alumno por Id
const putAlumnoById = async (req, res) => {
    try {
        const alumno = await Alumno.findByIdAndUpdate(req.params.id , req.body , {new: true});
        res.json(alumno);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Representando el DELETE con DELETE
const deleteAlumnoById = async (req, res) => {
    try {
        const alumno = await Alumno.findByIdAndDelete(req.params.id);
        res.json({message: 'El alumno fue eliminado'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    postAlumno,
    getAlumnos,
    getAlumnoById,
    putAlumnoById,
    deleteAlumnoById
};