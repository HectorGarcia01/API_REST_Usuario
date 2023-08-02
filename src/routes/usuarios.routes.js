const router = require('express').Router();

//Obtener todos los usuarios
router.get('/', (req, res) => {
    res.json([]);
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
router.post('/:id', (req, res) => {
    const { nombre, email } = req.body;

    res.json({
        nombre,
        email
    });
});

module.exports = router;