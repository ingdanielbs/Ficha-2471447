const express = require("express");
const usuarios = require("../data/usuarios");

const usuariosGet = (request, response) => {
  response.json({
    mensaje: "Lista de usuarios",
    usuarios,
  });
};

const usuarioGet = (request, response) => {
  const { id } = request.params;
  const usuario = usuarios.filter((usuario) => usuario.id == id);
  if (usuario.length > 0) {
    response.json({
      mensaje: "Información del usuario",
      usuario,
    });
  } else {
    response.json({
      mensaje: "Usuario no encontrado",
    });
  }
};

const usuarioPost = (request, response) => {
  const body = request.body;
  usuarios.push(body);
  response.json({
    mensaje: "Usuario registrado",
  });
};

const usuarioPut = (request, response) => {
  const { id } = request.params;
  const usuario = usuarios.filter((usuario) => usuario.id == id);
  if (usuario.length > 0) {
    const { nombre, apellido, email, estado } = request.body;
    usuario[0].nombre = nombre;
    usuario[0].apellido = apellido;
    usuario[0].email = email;
    usuario[0].estado = estado;
    response.json({
      mensaje: "Información del usuario",
      usuario,
    });
  } else {
    response.json({
      mensaje: "Usuario no encontrado",
    });
  }
};

const usuarioDelete = (request, response) => {
    const { id } = request.params;
    let usuario = usuarios.filter((usuario) => usuario.id == id);
    if (usuario.length > 0) {
        usuario = usuarios.filter((usuario) => usuario.id != id);
      response.json({
        mensaje: "Usuario eliminado",
      });
    } else {
      response.json({
        mensaje: "Usuario no encontrado",
      });
    }
};

module.exports = {
  usuariosGet,
  usuarioGet,
  usuarioPost,
  usuarioPut,
  usuarioDelete,
};
