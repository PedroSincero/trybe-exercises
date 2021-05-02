// São por elas que você passa os valores para o componente, e é como o torna reutilizável em diferentes contextos. Elas são como os parâmetros de uma função. Observe o exemplo abaixo de como seria uma função que retornaria a mesma mensagem que o componente Greeting renderiza:

function greeting(name){
    return `Hello, ${name}`;
  }
  console.log(greeting('Samuel'));

//   Lembrando que, assim como podemos ter vários parâmetros em uma função, conseguimos também passar inúmeras propriedades para o componente por meio das props . Adicionemos o sobrenome da pessoa à função e ao componente.

function greeting(name, lastName){
    return `Hello, ${name} ${lastName}`;
  }
  console.log(greeting('Samuel', 'Silva'));

//Ao componente Greeting :

import React from 'react';

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name} {this.props.lastName}</h1>;
  }
}

export default Greeting;

// Agora o chamamos dentro do componente App :

import Greeting from './Greeting';

function App() {
  return (
    <main>
      <Greeting name="Samuel" lastName="Silva" />
    </main>
  );
}

export default App;

//Você pode estar pensando: entendi que o uso de props é importante e como passá-las para um componente, mas como funciona exatamente o trâmite das props ? Para compreender isso melhor, vamos analisar com mais cuidado a linha 6 do código anterior. Ao atribuir as props name e lastName ao componente Greeting , o React automaticamente monta um objeto contendo as informações passadas e as disponibiliza para o componente montado numa variável chamada props , num formato parecido com esse:

const props = { name: 'Samuel', lastName: 'Silva' }

// Esse objeto props , por sua vez, é passado para o componente Greeting , o qual poderá resgatar tanto o nome como o sobrenome através do this.props.name e this.props.lastName .
