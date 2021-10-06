import pokemons from './Data'
import Pokedex from "./Pokedex";
import React, { Component } from 'react';

class Pokeinfo extends Component {
  render() {
    return (
      <>
      <div className='main-content-opacity'></div>
      <div className='pokedex'>
      <section className='pokeinfo'>
        {pokemons.map((poke) => {
          return <Pokedex key={poke.id} pokemon={poke} />;
        })}
      </section>
      </div>
      </>
    );
  }
}

export default Pokeinfo;