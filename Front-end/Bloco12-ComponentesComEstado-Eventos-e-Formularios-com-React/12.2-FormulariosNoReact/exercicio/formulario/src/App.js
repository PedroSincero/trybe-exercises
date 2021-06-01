import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
      email: '',
      age: '',
      anecdote: '',
      terms: false,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <label>
            Nome:
            <input
              name="name"
              type="text"
              onChange={ this.handleChange }
            />
          </label>
          <label>
            Email:
            <input
              name="email"
              type="email"
              onChange={ this.handleChange }
            />
          </label>
          <label>
            Idade:
            <select
              name="age"
              defaultValue=""
              onChange={ this.handleChange }
            >
              <option value="">Selecione</option>
              <option value="adult">Maior que 18</option>
              <option value="underage">Menor que 18</option>
            </select>
          </label>
          <label>
            Anedota:
            <textarea
              name="anecdote"
              onChange={ this.handleChange }
            />
          </label>
          <label>
            <input
              type="checkbox"
              name="terms"
              onChange={ this.handleChange }
            />
            Concordo com termos e acordos
          </label>
        </form>
      </div>
    );
  }
}

export default App;
