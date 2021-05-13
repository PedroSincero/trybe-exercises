import React, { Component } from 'react';

class AddForm extends Component {
  render() {
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          id="title"
          value={ title }
          onChange={ this.HandleSearch }
          data-testid="title-input"
        />
      </label>
    );
  }
}

export default AddForm;
