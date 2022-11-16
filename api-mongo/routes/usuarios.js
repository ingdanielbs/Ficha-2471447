const {Router} = require('express');
const {check} = require('express-validator');

const {usuariosPost, usuariosGet, usuarioGet} = require('../controllers/usuarios');

const router = Router();

router.post('/', [
    check('correo', 'El correo no es válido').isEmail(),
    check('nombre', 'el nombre es obligatorio').not().isEmpty(),
    check('password', 'el password es obligatorio').not().isEmpty(),
    check('rol', 'el rol es obligatorio').isIn(['ADMIN_ROLE', 'USER_ROLE'])
], usuariosPost);

router.get('/', usuariosGet);
router.get('/:id', usuarioGet);


module.exports = router;