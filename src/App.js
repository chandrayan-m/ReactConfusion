import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand} from 'reactstrap';
import Menu from "./components/MenuComponent";
import {DISHES} from './shared/dish';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {dish: DISHES};
  }
  render() {
    return (
      <div className="App">
      <Navbar dark color="primary">
      <div className="container">
      <NavbarBrand href="/">MySoulTonic</NavbarBrand>
      </div>
      </Navbar>
      <Menu dishes = {this.state.dish}/>
      </div>
    );
  }
}

export default App;
