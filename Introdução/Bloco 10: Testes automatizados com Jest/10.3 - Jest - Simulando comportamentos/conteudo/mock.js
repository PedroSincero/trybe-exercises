// O objetivo de se mockar uma função, módulo ou requisição é permitir a quem desenvolve ter controle sobre todo o funcionamento de seus testes.
// Como ter certeza do seu retorno e, principalmente, de que seu teste não está caindo em um falso-positivo ?

const retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);

const divisivelPorDois = () => (retornaNumeroAleatorio() % 2) === 0;

test('quando o número aleatório é par, a função retorna `true`', () => {
  expect(divisivelPorDois()).toBe(true); // Como garantimos que o número retornado será par?
});
// Mockar o comportamento da função retornaNumeroAleatorio() para garantir que ela está, nesse teste, retornando um número par, seria a solução pra esse impasse!
// Dentre as principais formas de se mockar algo em Jest, destacam-se três:
// jest.fn();
// jest.mock();
// jest.spyOn();
