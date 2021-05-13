import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((movie) => {
      this.setState({ movies: movie });
    });
  }

  render() {
    const { movies } = this.state;

    return (
      <div data-testid="movie-list">
        {!movies.length ? <Loading />
          : (movies.map((movie) => (<MovieCard key={ movie.title } movie={ movie } />
          )))}
        {!movies.length ? null : <Link to="/movies/new">ADICIONAR CARTÃO</Link>}
      </div>
    );
  }
}

export default MovieList;
