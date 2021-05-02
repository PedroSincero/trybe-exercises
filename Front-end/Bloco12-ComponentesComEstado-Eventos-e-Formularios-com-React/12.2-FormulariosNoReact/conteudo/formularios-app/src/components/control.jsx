import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      idade: 0,
    };
  }


  handleChange(event) {
    this.setState({
      estadoFavorito: event.target.value,
    });
  }
  handleChange2 = (event) => {
    this.setState({
      idade: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
              <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleChange} />
          </label>
          <select>
          <input
            type="number"
            name="idade"
            />
            <textarea name="idade" value={this.state.idade} onChange={this.handleChange2}></textarea>
          <input
            type="checkbox"
            name="vaiComparecer"
          />
          </select>
        </form>
      </div>
    );
  }
}

export default Form;