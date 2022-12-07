const {Router} = require('express');
const {check} = require('express-validator');

const {usuariosPost, usuariosGet, usuarioGet, usuariosPut, usuariosDelete} = require('../controllers/usuarios');
const validarJWT = require('../middlewares/validar-jwt');
const { esAdminRole } = require('../middlewares/validar-roles');

const router = Router();

router.post('/', [
    check('correo', 'El correo no es válido').isEmail(),
    check('nombre', 'el nombre es obligatorio').not().isEmpty(),
    check('password', 'el password es obligatorio').not().isEmpty(),
    check('rol', 'el rol es obligatorio').isIn(['ADMIN_ROLE', 'USER_ROLE'])
], usuariosPost);

router.get('/', [validarJWT], usuariosGet);
router.get('/:id', [validarJWT], usuarioGet);
router.put('/:id', [validarJWT], usuariosPut);
router.delete('/:id',[validarJWT, esAdminRole], usuariosDelete);


module.exports = router;