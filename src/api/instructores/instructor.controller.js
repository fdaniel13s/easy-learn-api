const Instructor = require('./instructor.model');

const getInstructores = async (req, res) => {
    try {
        const instructores = await Instructor.find();
        res.json(instructores);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getInstructorById = async (req, res) => {
    try {
        const instructor = await Instructor.findById(req.params.id);
        res.json(instructor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const postInstructor = async (req, res) => {
    try {
        const instructor = new Instructor(req.body);
        const savedInstructor = await instructor.save();
        res.json(savedInstructor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const putInstructorById = async (req, res) => {
    try {
        const instructor = await Instructor.findByIdAndUpdate
        (req.params.id, req.body, {new: true});
        res.json(instructor);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteInstructorById = async (req, res) => {
    try {
        const instructor = await Instructor.findByIdAndDelete(req.params.id);
        res.json({message: 'El instructor fue eliminado'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const login = async (req, res) => {
    try {
        const instructor = await Instructor.findOne({ correo: req.query.correo, password: req.query.password });
        if (instructor) {
            res.json(instructor);
        } else {
            res.status(404).json({ message: 'No se encontró un instructor con ese correo y contraseña' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getInstructores,
    getInstructorById,
    postInstructor,
    putInstructorById,
    deleteInstructorById,
    login
}