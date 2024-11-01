const express = require('express');
const router = express.Router();

const perfilController = require('../controllers/perfil.controller');
const upload = require('../middleware/multer');

router.get('/', perfilController.exibirPaginaPerfil);
router.post('/file', upload.single('file'), perfilController.enviarArquivo);



module.exports = router