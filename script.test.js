const { somar, mensagemBoasVindas, Maior } = require('./script');

test('soma dois números', () => {
  expect(somar(2, 3)).toBe(5);
});

test('mensagem de boas vindas', () => {
  expect(mensagemBoasVindas('Diogo')).toBe('Olá, Diogo!');
});
test('verificar maior numero', () => {
  expect(Maior(1, 5)).toBe(5);
});