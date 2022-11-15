const express = require('express');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');
const Usuario = require('../models/usuario');

const usuariosPost = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty){
        return res.status(400).json(errors);
    }

    const { nombre, correo, password, rol} = req.body;
    const usuario = new Usuario({nombre, correo, password, rol});

    const existeEmail = await Usuario.findOne({correo});  

    if (existeEmail){
        return res.json({msg: "El correo ya existe"});
    }

    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    usuario.save();
    res.json({msg: "Usuario creado"});

}

module.exports = {usuariosPost}