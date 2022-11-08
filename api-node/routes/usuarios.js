const {Router} = require('express');

const {
    usuariosGet,
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete    
} = require('../controllers/usuarios');