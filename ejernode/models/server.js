const express = require('express');
const {dbConnection} = require('../data/config');

class Server{

    constructor(){
       this.app  = express();
       this.port = process.env.PORT;
       this.librosPATH = '/api/libros';
       this.conectarDB();
       this.middlewares();
       this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares(){        
        this.app.use(express.json());
    };

    routes(){
        this.app.use(this.librosPATH, require('../routes/libros'));
    };

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }
}

module.exports = Server;