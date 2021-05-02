import React from 'react';
import './App.css';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */
class App extends React.Component {
  constructor() {
    super();
    // this.handleClick = this.handleClick.bind(this);

    this.state = {
      butao: 0,
      butao2: 0,
      butao3: 0,
    };
  }
  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
  handleClick = () => {
    this.setState((previusState, _props) => ({
      butao: previusState.butao + 1,
    }));
  }
  handle2Click = () => {
    this.setState((previusState, _props) => ({
      butao2: previusState.butao2 + 1,
    }));
  }
  handle3Click = () => {
    this.setState((previusState, _props) => ({
      butao3: previusState.butao3 + 1,
    }));
  }
  render() {
    return (
    <div>
    <button onClick={this.handleClick}>O meu Butão {this.state.butao}</button>
    <button onClick={this.handle2Click}>Meu outro Butão {this.state.butao2}</button>
    <button onClick={this.handle3Click}>Meu outro Outro Butão {this.state.butao3}</button>
    </div>
    )
  }
}

export default App;
