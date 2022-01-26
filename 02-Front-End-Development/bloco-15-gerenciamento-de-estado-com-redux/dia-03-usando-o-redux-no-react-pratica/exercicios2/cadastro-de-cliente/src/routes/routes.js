import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Clients from "../pages/Clients";
import Registration from "../pages/Cadastro";


class Routers extends Component {
  render(){
    return(
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Home /> }/>
        <Route path='/login' element={ <Login /> } />
        <Route path='/clients' element={ <Clients /> } />
        <Route path='/registration' element={ <Registration /> } />
      </Routes>
      </BrowserRouter>
    )
  }
}

export default Routers;