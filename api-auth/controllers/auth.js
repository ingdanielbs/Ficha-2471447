const express = require('express');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');
const Usuario = require('../models/usuario');

const login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    const { correo, password } = req.body;
    try {
        const usuario = await Usuario.findOne({correo});
        if (!usuario) {
            return res.status(400).json({
                msg: "Usuario o contraseña incorrectos"
            });
        }
        const validPassword = bcryptjs.compareSync(password, usuario.password);

        if (!validPassword) {
            return res.status(400).json({
                msg: "Usuario o contraseña incorrectos"
            });
        }

        if (!usuario.estado) {
            return res.status(400).json({
                msg: "Usuario inhabilitado"
            });
        }

        res.json({msg: "Usuario logueado"});
    } catch (error) {
        
    }

}

module.exports = {login};