const express = require('express');
const Libro = require('../models/libro');
const { validationResult } = require('express-validator');

const librosGet = async(request, response) => {
    const libros = await Libro.find();       
    response.json({
        libros
    });
};

const libroGet = async (request, response) => {
    const {id} = request.params;
    const libro = await Libro.findById(id);
    response.json(
        {
            mensaje: "Información del libro",
            libro
        }
    );
};

const librosPost = async(request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(400).json(errors);
    }

    /* const { nombre, correo, password, rol } = request.body;
    const usuario = new Usuario({nombre, correo, password, rol}); */
    const body = request.body;
    const libro = new Libro(body);
   
    libro.save();
    response.json(
        {
            mensaje: "Libro registrado",
            libro
        }
    );
};

const librosPut = async (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(400).json(errors);
    }
    const {id} = request.params;
    const {_id, ...resto } = request.body;
    
    const libro = await Usuario.findByIdAndUpdate(id, resto);
    response.json(
        {
            mensaje: "libro editado",
            libro
        }
    );
};

const librosDelete = async (request, response) => {
    const {id} = request.params;
    const libro = await Libro.findByIdAndUpdate(id, {estado: false});

    response.json(
        {
            mensaje: "libro eliminado"
        }
    );
};

module.exports = {
    librosGet,
    libroGet,
    librosPost,
    librosPut,
    librosDelete
}