import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    console.log("1- construtor");
  }

  componentDidMount() {
    console.log("3- componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("4- shouldComponentUpdate", this.state, nextState);
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("5- componentDidUpdate", this.state, prevState);
  }

  render() {
    console.log("2- render");
    return (
      <div>
        <p>Contador</p>
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}
        >
          Soma
          </button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default Counter;
