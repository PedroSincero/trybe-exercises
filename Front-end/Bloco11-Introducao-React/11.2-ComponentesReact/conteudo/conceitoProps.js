import React from 'react';

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default Greeting;

// 1. A declaração de um componente chamado Greeting .
// 2. O componente Greeting herda da classe Component da biblioteca react .
// 3. O componente Greeting descreve o que vai ser mostrado para quem usar a aplicação , declarado no método obrigatório render . Nesse caso, Greeting retorna: <h1>Hello, {this.props.name}</h1> .
// 4. O componente Greeting possui como propriedade um objeto chamado props , que contém todos os dados passados como parâmetro na hora de chamar um componente. Ou seja, chamar <Greeting name="Samuel" /> faz com que o componente tenha uma prop igual a { name: "Samuel" } .
// 5. Exportamos o componente Greeting de forma que ele possa ser reutilizado na aplicação.