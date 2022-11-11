const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({ 
    nombre:{
        type: String,
        required: [true, "El campo nombre es requerido"]
    },
    correo:{
        type: String,
        required: [true, "El correo es requerido"],
        unique: true
    },
    password:{
        type: String,
        required: [true, "La contraseña es requerida"]
    },
    google:{
        type: Boolean,
        default: false        
    },
    img:{
        type: String        
    },
    estado:{
        type: Boolean,
        default: true        
    },
    rol:{
        type: String,
        enum: ["ADMIN_ROLE", "USER_ROLE"],
        required: true        
    },
}); 

module.exports = model('Usuario', UsuarioSchema);