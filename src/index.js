const express = require('express');
const cors = require('cors');
const usuarioRoutes = require('./routes/usuarios.routes');
const db = require('./db/database');
const app = express();
const port = process.env.PORT || 3000;

//Conexión a la db
(async () => {
    try {
        await db.authenticate();

        console.log("Conexión a la db exitosamente");
    } catch (error) {
        throw new Error(error);
    }
})()

//Middleware
app.use(express.json()); //Recibir información
app.use(cors());        //Habilitar otras aplicaciones para realizar solicitudes a nuestra app

//Agregando las rutas a la app
app.use('/usuarios', usuarioRoutes);

//Inicialización del servidor
app.listen(port, () => {
    console.log(`Servidor inicializado en el puerto ${port}`);
});