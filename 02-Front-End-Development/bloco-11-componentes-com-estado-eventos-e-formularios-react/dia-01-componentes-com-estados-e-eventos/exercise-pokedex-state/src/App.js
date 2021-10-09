import React from 'react';
import './App.css';
import Pokeinfo from './data/PokeInfo';


function App() {
  return (
    <>
      <div className='header'>
        <h1 className='header'>PokedeX</h1>
      </div>
      <Pokeinfo />
      <div>
        <h2 className='footer'>Desenvolvido por Rafael Colombo</h2>
      </div>
    </>
  );
}

export default App;
