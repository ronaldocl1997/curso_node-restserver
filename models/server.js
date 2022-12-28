
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor(){
        this.port = process.env.PORT;
        this.app = express();
        this.usuarioPath = '/api/usuarios';

        //Connectar a base de datos
        this.conectarDb();
        //Middlewares
        this.middlewares();
        //Rutas de mi aplicacion
        this.routes();
    }

    async conectarDb() {
        await dbConnection();
    }

    middlewares() {

        //Cors
        this.app.use( cors() );

        // Parseo y lectura del body
        this.app.use( express.json() );

        //Directorio publico
        this.app.use( express.static('public'));
    }

    routes(){
       
        this.app.use(this.usuarioPath,require('../routes/user.routes'));
    }

    listen(){
        this.app.listen( this.port,()=>{
            console.log('servidor corriendo en el puerto',this.port);
        });
    }
}


module.exports = Server;