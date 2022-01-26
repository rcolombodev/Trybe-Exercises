import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class BackToHome extends Component {
  render() {
    return (
      <>       
        <button type='button'>
          <Link to='/'>Back to Home</Link>
        </button>
      </>
    );
  }
}
export default BackToHome ;
