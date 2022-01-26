import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import HomeButton from '../components/BackToHomeBtn';

class Login extends Component {
  render() {
    return (
      <>
        <label>
          <input type='email' placeholder='e-mail'/>
        </label>
        <label>
          <input type='password' placeholder='password'/>
        </label>
        <button type='submit'>
          <Link to='/clients'>Entrar</Link>
        </button>

        <HomeButton />
      </>
    );
  }
}
export default Login;
