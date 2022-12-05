const {Router} = require('express');
const {check} = require('express-validator');

const { login } = require('../controllers/auth');

const router = Router();

router.post('/login', [
    check('correo', 'El correo no es válido').isEmail(),
    check('password', 'el password es obligatorio').not().isEmpty()
], login);


module.exports = router;