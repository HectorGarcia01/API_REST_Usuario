const express = require('express');
const cors = require('cors');
const usuarioRoutes = require('./routes/usuarios.routes');
const app = express();
const port = process.env.PORT || 3000;

//Middleware
app.use(express.json()); //Recibir información
app.use(cors());        //Habilitar otras aplicaciones para realizar solicitudes a nuestra app

//Agregando las rutas a la app
app.use('/usuarios', usuarioRoutes);

//Inicialización del servidor
app.listen(port, () => {
    console.log(`Servidor inicializado en el puerto ${port}`);
});