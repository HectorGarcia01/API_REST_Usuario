const router = require('express').Router();
const Usuario = require('../models/Usuario')

//Obtener todos los usuarios
router.get('/', async (req, res) => {
    const usuarios = await Usuario.findAll()

    res.json(usuarios);
});

//Obtener usuario por id
router.get('/:id', (req, res) => {
    const { id } = req.params;

    res.json({
        id,
        nombre: "Hector"
    });
});

//Crear usuario
router.post('/', async (req, res) => {
    const { nombre, email } = req.body;

    const usuario = await Usuario.create({ nombre, email });

    if (!nombre || !email) {
        return res.status(400).json({
            error: "uno o más campos vacíos"
        });
    }

    res.json(usuario);
});

module.exports = router;