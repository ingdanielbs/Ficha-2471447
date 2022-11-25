const {Schema, model} = require('mongoose');

const LibroSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
    },
    editorial: {
        type: String,
        required: [true, 'La editorial es obligatorio'],        
    },
    autor: {
        type: String,
        required: [true, 'El autor es obligatorio']
    },
    precio: {
        type: Number,
        default: 0
    },
    estado: {
        type: Boolean,
        default: true
    }    
});

module.exports = model('Libro', LibroSchema);