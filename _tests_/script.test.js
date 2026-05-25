const {
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
} = require('./script');


test('soma dois números', () => {
  expect(somar(2, 3)).toBe(5);
});

test('mensagem de boas vindas', () => {
  expect(mensagemBoasVindas('Diogo')).toBe('Olá, Diogo!');
});

test('verificar maior numero', () => {
  expect(Maior(1, 5)).toBe(5);
});



test('verificar número par', () => {
  expect(parOuImpar(4)).toBe('Par');
});

test('verificar número ímpar', () => {
  expect(parOuImpar(7)).toBe('Ímpar');
});



test('não pode votar', () => {
  expect(verificarVoto(15)).toBe('Não pode votar');
});

test('voto opcional', () => {
  expect(verificarVoto(17)).toBe('Voto opcional');
});

test('voto obrigatório', () => {
  expect(verificarVoto(30)).toBe('Voto obrigatório');
});


test('número positivo', () => {
  expect(verificarNumero(10)).toBe('Positivo');
});

test('número negativo', () => {
  expect(verificarNumero(-5)).toBe('Negativo');
});

test('número igual a zero', () => {
  expect(verificarNumero(0)).toBe('Igual a zero');
});



test('bônus de 20%', () => {
  expect(calcularBonus(1000)).toBe(200);
});

test('bônus de 10%', () => {
  expect(calcularBonus(3000)).toBe(300);
});

test('bônus de 5%', () => {
  expect(calcularBonus(6000)).toBe(300);
});


test('pode dirigir', () => {
  expect(podeDirigir(18)).toBe('Pode dirigir');
});

test('não pode dirigir', () => {
  expect(podeDirigir(15)).toBe('Não pode dirigir');
});


test('mês do primeiro semestre', () => {
  expect(semestreDoMes('março')).toBe('Primeiro semestre');
});

test('mês do segundo semestre', () => {
  expect(semestreDoMes('outubro')).toBe('Segundo semestre');
});


test('verificar vogal', () => {
  expect(verificarLetra('a')).toBe('Vogal');
});

test('verificar consoante', () => {
  expect(verificarLetra('b')).toBe('Consoante');
});

test('calcular média', () => {
  expect(calcularMedia([10, 20, 30, 40, 50])).toBe(30);
});


test('login com sucesso', () => {
  expect(login('Admin', '123'))
    .toBe('Conectado com sucesso!');
});

test('login inválido', () => {
  expect(login('Diogo', '999'))
    .toBe('Acesso negado! Usuário ou senha incorretos!');
});