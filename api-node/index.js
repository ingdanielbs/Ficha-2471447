require('dotenv').config()
const Usuarios = require('./models/usuarios');

const usuario = new Usuarios();

usuario.listen();

