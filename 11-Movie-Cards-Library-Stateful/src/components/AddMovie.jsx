import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovies extends Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  HandleSearch = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  HandleClick = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  AtribbuteTest = (name) => {
    if (name === 'title') {
      return ('Titulo');
    }
    if (name === 'subtitle') {
      return ('Subtítulo');
    }
    if (name === 'imagePath') {
      return ('Imagem');
    }
    if (name === 'storyline') {
      return ('Sinopse');
    }
    if (name === 'rating') {
      return ('Avaliação');
    }
  }

  AttributeTitleNew = (name, value, type) => {
    if (type !== 'textarea') {
      return (
        <label htmlFor={ name } data-testid={ `${name}-input-label` }>
          {this.AtribbuteTest(name)}
          <input
            name={ name }
            value={ value }
            onChange={ this.HandleSearch }
            type={ type }
            data-testid={ `${name}-input` }
          />
        </label>
      );
      // utilização de crase `${}`
    }

    return (
      <label htmlFor={ name } data-testid={ `${name}-input-label` }>
        {this.AtribbuteTest(name)}
        <textarea
          name={ name }
          value={ value }
          onChange={ this.HandleSearch }
          data-testid={ `${name}-input` }
        />
      </label>
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {this.AttributeTitleNew('title', title, 'text')}
        {this.AttributeTitleNew('subtitle', subtitle, 'text')}
        {this.AttributeTitleNew('imagePath', imagePath, 'text')}
        {this.AttributeTitleNew('storyline', storyline, 'textarea')}
        {this.AttributeTitleNew('rating', rating, 'number')}
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={ genre }
            onChange={ this.HandleSearch }
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button type="button" data-testid="send-button" onClick={ this.HandleClick }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovies.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovies;
