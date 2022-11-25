const {Router} = require('express');
const { check } = require('express-validator');

const {
    librosGet,
    libroGet,
    librosPost,
    librosPut,
    librosDelete    
} = require('../controllers/libros');

const router = Router();

router.get('/', librosGet);
router.get('/:id', libroGet);
router.post('/', [
    check('nombre', 'El nombre no es obligatorio').not().isEmpty(),
    check('editorial', 'La editorial es obligatorio').not().isEmpty(),
    check('autor', 'El autor es obligatorio').not().isEmpty()
] ,librosPost);
router.put('/:id',[
    check('_id', 'No es un ID válido').isMongoId()       
], librosPut);
router.delete('/:id', librosDelete);

module.exports = router;
