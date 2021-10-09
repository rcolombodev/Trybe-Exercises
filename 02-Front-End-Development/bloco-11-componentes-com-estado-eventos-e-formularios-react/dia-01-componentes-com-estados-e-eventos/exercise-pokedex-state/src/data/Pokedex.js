/* eslint-disable react/prop-types */
import React, {Component} from 'react'
class Pokedex extends Component {
  render() {
    const { pokemon } = this.props;

    return (
      <section className='card'>
        <img src={pokemon.image} alt={pokemon.name}/>
        <h2>{pokemon.name}</h2>
        <p>{pokemon.id}</p>
        <p>Type: {pokemon.type}</p>
        <p>AverageWeight: {`${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}`}</p>
      </section>
    );
  }
}

export default Pokedex;