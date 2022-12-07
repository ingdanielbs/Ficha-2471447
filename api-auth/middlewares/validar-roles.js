const express = require('express');

const esAdminRole = (req, res, next) => {
    if(!req.usuario){
        return res.status(500).json({msg: 'Hay que validar el rol y el token'})
    }
    const {rol, nombre} = req.usuario;
    if(rol !== "ADMIN_ROLE"){
        return res.status(401).json({msg: `El usuario ${nombre} no es administrador - acceso denegado` })

    }
    next();
}

module.exports = {esAdminRole};