import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Users from './components/Users';
import About from './components/About';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/about" component={About} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    );
  }
}

export default App;
