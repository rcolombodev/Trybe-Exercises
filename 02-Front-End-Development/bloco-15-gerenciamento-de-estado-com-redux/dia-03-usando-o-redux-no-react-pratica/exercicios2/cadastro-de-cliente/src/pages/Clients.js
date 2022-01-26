import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HomeButton from '../components/BackToHomeBtn';

class Clients extends Component {
  render() {
    return (
      <div>
        <button type='button'>
          <Link to='/registration'>Registration</Link>
        </button>
        <HomeButton />
      </div>
    );
  }
}
export default Clients;