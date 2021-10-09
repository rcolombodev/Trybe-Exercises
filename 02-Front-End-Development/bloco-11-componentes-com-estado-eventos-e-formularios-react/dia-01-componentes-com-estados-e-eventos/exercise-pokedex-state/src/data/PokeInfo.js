import pokemons from './Data'
import Pokedex from './Pokedex';
import React, { Component } from 'react';
import Button from './Button'
class Pokeinfo extends Component {
  constructor() {
    super();
    this.state = {
      pokemonIndex: 0,
      pokemonType: '',
    };
    this.nextPokemon = this.nextPokemon.bind(this)
    // this.filterPokemons = this.filterPokemons.bind(this)
  }

  // filterPokemons() {
  //   pokemons.filter((pokemon) => {
  //     pokemon.type === this.state.pokemonType
  //   })
  // }

  nextPokemon() {
    const pokeLength = pokemons.length - 1;
    const currentState = this.state.pokemonIndex;
    this.setState((previousState, _props ) => ({
      pokemonIndex: (pokeLength === currentState) ? 0 : previousState.pokemonIndex + 1
    }));
  }
  render() {
    return (
      <>
      <div className='main-content-opacity'></div>
      <div className='pokedex'>
      <section className='pokeinfo'>
        {pokemons.filter((pokemon)=> pokemon.type.includes(this.state.pokemonType)).map((poke) => {
          return <Pokedex key={poke.id} pokemon={poke} />;
        })[this.state.pokemonIndex]}
      </section>
      <Button onClick={ this.nextPokemon }/>
      </div>
      </>
    );
  }
}

export default Pokeinfo;