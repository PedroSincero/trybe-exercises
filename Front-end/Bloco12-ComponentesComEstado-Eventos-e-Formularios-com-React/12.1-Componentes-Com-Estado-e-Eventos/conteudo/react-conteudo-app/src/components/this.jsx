//O this acessa, nos componentes React, um objeto que guarda tudo que importa àquele componente . Um código de Hello, World! em React, ilustrado abaixo, gera a impressão no console a seguir:

import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    console.log(this)
    return <span>Hello, world!</span>
  }
}

export default App;