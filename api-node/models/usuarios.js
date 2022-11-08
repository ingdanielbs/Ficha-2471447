const express = require('express');

class Usuarios{

    constructor(){
       this.app = express();
       this.port = process.env.PORT;
       this.usuariosPATH = '/api/usuarios';
       
       this.middlewares();

       this.routes();
    }
    middlewares(){
        this.app.use(express.json());
        this.app.use(express.static('public'));
    };

    routes(){
        this.app.use(this.usuariosPATH, require('../routes/usuarios'));
    };

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}

module.exports = Usuarios;