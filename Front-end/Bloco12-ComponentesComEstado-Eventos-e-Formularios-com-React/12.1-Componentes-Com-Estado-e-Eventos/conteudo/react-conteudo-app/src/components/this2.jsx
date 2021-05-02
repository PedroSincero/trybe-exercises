//Quando definimos funções nossas numa classe de componente React , ele não funciona tão bem! Veja só:
import React from 'react';
import './App.css';

class App extends React.Component {
  handleClick() {
    // Essa chamada ao `this` retorna `undefined`? !
    console.log(this)
    console.log('Clicou')
  }

  render() {
    // Já essa chamada ao `this`, feita de dentro da função `render`, retorna o objeto que esperamos
    console.log(this)
    return <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
  }
}

export default App;