function somar(a, b) {
  return a + b;
}

function mensagemBoasVindas(nome) {
  return `Olá, ${nome}!`;
}
function verificarMaior(a,b){
  if(a>b){
    return a
  }
  if(a<b) {
    return b
  }
  return "iguais"
  
}


module.exports = { somar, mensagemBoasVindas };
