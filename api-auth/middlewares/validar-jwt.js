const jwt = require('jsonwebtoken');
const express = require('express');
const Usuario = require('../models/usuario');

const validarJWT = async (req, res, next) => {
    const token = req.header('x-token');

    if(!token){
        return res.status(401).json({msg: "No hay un token"})
    }
    try {
        const {uid} = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        req.uid = uid;
        const usuario = await Usuario.findById(uid);
        if (!usuario) {
            return res.status(401).json({msg: "Token no válido - usuario no esta registrado"})
        }
        if (!usuario.estado) {
            return res.status(401).json({msg: "Token no válido - usuario inhabilitado"})
        }
        req.usuario = usuario;

        next();

    } catch (error) {
        return res.status(401).json({msg: "Token no válido"})
    }

}

module.exports = validarJWT;