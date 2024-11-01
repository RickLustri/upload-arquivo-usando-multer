const multer = require('multer');
const path = require('path');


// Configuração de armazenamento do Multer
const storage = multer.diskStorage({

  // Definindo o caminho para salvar os arquivos
  destination: (request, file, callback) => {

    // Setando o caminho onde os arquivos serão salvos
    callback(null, 'uploads/');
  },

  // Definindo o nome do arquivo
  filename: (request, file, callback) => {

    // Definindo um nome unico para o arquivo
    const idUnico = Date.now();
    
    // Definindo o nome do usuário
    const nomeDoUser = /* request.session.user */ 'USERNAME';

    // Setando o nome do arquivo
    callback(null, `${nomeDoUser}_${idUnico}_PERFIL${path.extname(file.originalname)}`);
  }

});


// Filtrando a extensão do arquivo
const filtrarExtensao = (request, file, callback) => {

  // Verificando a extensão do arquivo
  if (file.mimetype == 'image/png' || file.mimetype == 'image/jpeg') {

    // Aceitando a extensão do arquivo
    callback(null, true);

  } else {

    // Negando a extensão do arquivo
    callback(new Error('Extensão invalida'), false);
  }
};


// Configurando o upload de arquivos
const upload = multer({

  // Definindo o armazenamento
  storage: storage,

  // Definindo o limite de tamanho do arquivo
  limits: { fileSize: 1024 * 1024 * 5 },

  // Filtrando a extensão do arquivo
  fileFilter: filtrarExtensao
});


module.exports = upload