import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

afterEach(cleanup);

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    const { getByLabelText, getByText } = render(<App />)
    const input = getByLabelText('Tarefa:');
    const button = getByText('Adicionar');
    // Caso precise de uma nova query adicione no object destructuring
    // percorre a aplicação, adiciono cada parametro do array, e aciono o botão para cada.
    listTodo.forEach((tarefa) => {
      fireEvent.change(input, { target: { value: tarefa } })
      fireEvent.click(button);
    });
    // percorro a aplicação do array, verifico se ele está na tela
    listTodo.forEach((tarefa) => {
      expect(getByText(tarefa)).toBeInTheDocument();
    });
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    const { getByText } = render(<Item content="Limpar a casa"/>)
    expect(getByText('Limpar a casa')).toBeInTheDocument();
  });
});
