import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <button type='button'>
          <Link to='/login'>LOGIN</Link>
        </button>
      </div>
    );
  }
}
export default Home;
