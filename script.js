function somar(a, b) {
  return a + b;
}

function mensagemBoasVindas(nome) {
  return `Olá, ${nome}!`;
}

function Maior(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return a;
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

function parOuImpar(numero) {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

function verificarVoto(idade) {
  if (idade < 16) {
    return "Não pode votar";
  } else if ((idade >= 16 && idade < 18) || idade >= 70) {
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
  if (salario < 2000) {
    return salario * 0.20;
  } else if (salario >= 2000 && salario <= 5000) {
    return salario * 0.10;
  } else {
    return salario * 0.05;
  }
}

function podeDirigir(idade) {
  if (idade >= 18) {
    return "Pode dirigir";
  } else {
    return "Não pode dirigir";
  }
}

function semestreDoMes(mes) {
  const primeiroSemestre = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho"
  ];

  if (primeiroSemestre.includes(mes.toLowerCase())) {
    return "Primeiro semestre";
  } else {
    return "Segundo semestre";
  }
}

function verificarLetra(letra) {
  const vogais = ["a", "e", "i", "o", "u"];

  if (vogais.includes(letra.toLowerCase())) {
    return "Vogal";
  } else {
    return "Consoante";
  }
}

function calcularMedia(numeros) {
  let soma = 0;

  for (let numero of numeros) {
    soma += numero;
  }

  return soma / numeros.length;
}

function login(usuario, senha) {
  if (usuario === "Admin" && senha === "123") {
    return "Conectado com sucesso!";
  } else {
    return "Acesso negado! Usuário ou senha incorretos!";
  }
}

module.exports = {
  somar,
  mensagemBoasVindas,
  Maior,
  parOuImpar,
  verificarVoto,
  verificarNumero,
  calcularBonus,
  podeDirigir,
  semestreDoMes,
  verificarLetra,
  calcularMedia,
  login
};