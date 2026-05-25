const {
  buscarCursoNoBanco,
  buscarPeriododoCurso
} = require('./cursoService');

function obterNomeUsuario(id) {
  const usuario = buscarCursoNoBanco(id);
  return usuario.nome;
}

function obterPeriodoCurso(id) {
  const curso = buscarPeriododoCurso(id);
  return curso.periodo;
}

module.exports = {
  obterNomeUsuario,
  obterPeriodoCurso
};