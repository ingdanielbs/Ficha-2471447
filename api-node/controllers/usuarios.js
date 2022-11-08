const express = require('express');

const usuariosGet = (request, response) => {
    response.json(
        {
            mensaje: "Lista de usuarios"
        }
    );
};

const usuarioGet = (request, response) => {
    response.json(
        {
            mensaje: "Información del usuario"
        }
    );
};

const usuarioPost = (request, response) => {
    response.json(
        {
            mensaje: "Usuario registrado"
        }
    );
};

const usuarioPut = (request, response) => {
    response.json(
        {
            mensaje: "Usuario editado"
        }
    );
};

const usuarioDelete = (request, response) => {
    response.json(
        {
            mensaje: "Usuario eliminado"
        }
    );
};

module.exports = {
    usuariosGet,
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete
}