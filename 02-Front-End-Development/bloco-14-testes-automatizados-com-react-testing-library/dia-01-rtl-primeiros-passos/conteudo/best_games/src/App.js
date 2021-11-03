import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';

import './App.css';
import Details from './pages/Details';


class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path='/details/:id' component={Details} />
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
