import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
// import MovieCard from './components/MovieCard';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
// Agradecimento :
// Jefferson A.
// Mariana Mor.
// Daniel Roberto
// Denis Rossati
// Murillo Wolf
// Lucas Martins
// e todas as outras pessoas que eu n me lembro o nome que me ajudaram a entender melhor o react e começar a gostar de utiliza-lo.
