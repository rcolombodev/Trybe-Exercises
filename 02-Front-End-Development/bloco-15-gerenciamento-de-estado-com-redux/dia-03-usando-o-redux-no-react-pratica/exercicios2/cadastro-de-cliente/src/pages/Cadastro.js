import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import HomeButton from '../components/BackToHomeBtn';

class Registration extends Component {
  render() {
    return (
      <>
        <label>
          <input type='text' placeholder='Name' />
        </label>
        <label>
          <input type='number' placeholder='Age' />
        </label>
        <label>
          <input type='email' placeholder='E-mail' />
        </label>
        
        <button type='submit'>
          Register
        </button>
        
        <button type='submit'>
          <Link to='/clients'>Área de Clientes</Link>
        </button>

        <HomeButton />
      </>
    );
  }
}
export default Registration;
