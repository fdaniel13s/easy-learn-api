const Publicacion = require('./publicaciones.model');

const getPublicaciones = async (req, res) => {
    try {
        const publicaciones = await Publicacion.find();
        res.json(publicaciones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getPublicacionById = async (req, res) => {
    try {
        const publicacion = await Publicacion.findById(req.params.id);
        if (publicacion == null) {
            return res.status(404).json({ message: 'No se pudo encontrar la publicación' });
        }
        res.json(publicacion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const postPublicacion = async (req, res) => {
    const publicacion = new Publicacion({
        _id: req.body._id,
        usuario_id: req.body.usuario_id,
        contenido: req.body.contenido,
        fecha_publicacion: req.body.fecha_publicacion,
        curso_id: req.body.curso_id,
        tipo: req.body.tipo,
        comentarios: req.body.comentarios,
        reacciones: req.body.reacciones
    });

    try {
        const newPublicacion = await publicacion.save();
        res.status(201).json(newPublicacion);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deletePublicacion = async (req, res) => {
    try {
        const publicacion = await Publicacion.findById(req.params.id);
        if (publicacion == null) {
            return res.status(404).json({ message: 'No se pudo encontrar la publicación' });
        }

        await Publicacion.deleteOne({ _id: req.params.id });
        res.json({ message: 'Publicación eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const postComentario = async (req, res) => {
    try {
        const publicacion = await Publicacion.findById(req.params.id);
        if (publicacion == null) {
            return res.status(404).json({ message: 'No se pudo encontrar la publicación' });
        }

        const comentario = {
            usuario_id: req.body.usuario_id || null, // usuario_id es opcional
            contenido: req.body.contenido,
            fecha_comentario: new Date()
        };

        publicacion.comentarios.push(comentario);

        await publicacion.save();
        res.status(201).json(publicacion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getPublicaciones,
    getPublicacionById,
    postPublicacion,
    deletePublicacion,
    postComentario
};