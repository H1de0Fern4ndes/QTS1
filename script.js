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

function maiorValor(valor1, valor2) {
    if (valor1 > valor2) {
        return `${valor1} é maior`;
    } else if (valor2 > valor1) {
        return `${valor2} é maior`;
    } else {
        return "Os valores são iguais";
    }
}



function parOuImpar(valor1, valor2) {

    function verificar(numero) {
        if (numero % 2 === 0) {
            return `${numero} é par`;
        } else {
            return `${numero} é ímpar`;
        }
    }

    console.log(verificar(valor1));
    console.log(verificar(valor2));
}

function verificarVoto(idade) {
    if (idade < 16) {
        return "Não pode votar";
    } else if (
        (idade >= 16 && idade < 18) ||
        idade >= 70
    ) {
        return "Voto opcional";
    } else {
        return "Voto obrigatório";
    }
}


function verificarNumero(valor) {
    if (valor > 0) {
        return "Positivo";
    } else if (valor < 0) {
        return "Negativo";
    } else {
        return "Igual a zero";
    }
}

function calcularBonus(salario) {
    let bonus;

    if (salario < 2000) {
        bonus = salario * 0.20;
    } else if (salario >= 2000 && salario <= 5000) {
        bonus = salario * 0.10;
    } else {
        bonus = salario * 0.05;
    }

    return `Bônus: R$ ${bonus.toFixed(2)}`;
}



module.exports = { somar, mensagemBoasVindas, Maior };
