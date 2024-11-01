function exibirPaginaPerfil(req, res) {
  res.render('perfil');
}

function enviarArquivo(req, res) {
  res.send('enviar arquivo');

  // Verificando se o arquivo foi enviado corretamente com o nome do arquivo
  console.log(req.file.path);
}

// // Controller para atualizar o perfil do usuário, excluindo o arquivo antigo
// exports.atualizarPerfil = (req, res) => {
//   const nomeDoUser = req.session.userName;

//   if (!nomeDoUser) {
//       return res.status(400).json({ mensagem: 'Usuário não logado.' });
//   }

//   // Verificar se já existe um arquivo de perfil do usuário
//   const arquivos = fs.readdirSync(uploadDir);
//   const arquivoAntigo = arquivos.find(file => file.startsWith(`${nomeDoUser}_`) && file.includes('_PERFIL'));

//   // Se houver um arquivo antigo, exclua-o
//   if (arquivoAntigo) {
//       const caminhoArquivoAntigo = path.join(uploadDir, arquivoAntigo);
//       fs.unlinkSync(caminhoArquivoAntigo);
//   }

// };



module.exports = {
  exibirPaginaPerfil,
  enviarArquivo
}
