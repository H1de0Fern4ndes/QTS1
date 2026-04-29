function somar(a, b) {
  return a + b;
}

function mensagemBoasVindas(nome) {
  return `Olá, ${nome}!`;
}

function Maior(a , b){
  if(a>b){
    return a;
  }
  else if(b>a){
    return b;
  }
  else {
    return a,b;
  }
}

module.exports = { somar, mensagemBoasVindas };
