import React from 'react';
import movies from './data';
import Header from './components/Header';
import './App.css';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ movies } />
    </div>
  );
}
// Agradecimentos A: Daniel Robeito, Denis, Matheus Gois, Henrique Zozimo, Lucas Portella, Jefferson Andrade, Renan Antunes e as pessoas que eu n me lembro o nome, muitissimo obrigado.
export default App;
