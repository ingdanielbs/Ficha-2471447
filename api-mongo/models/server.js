const express = require('express');
const {dbConnection} = require('../database/config')

class Usuarios{
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPATH = '/api/usuarios';
        this.conectarDB();
        this.middlewares();
        this.routes();
    }
    async conectarDB(){
        await dbConnection();
    }
    middlewares(){
        this.app.use(express.json());
    }
    routes(){
        this.app.use(this.usuariosPATH, require('../routes/usuarios') ); 
    }
}