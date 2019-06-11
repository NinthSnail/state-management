import React from 'react';
import './App.css';
import MoviesList from './MovieList';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <MoviesList />
    </div>
  );
}

export default App;
