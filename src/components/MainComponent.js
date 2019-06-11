import React, { Component } from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';
import Menu from "./MenuComponent";
import {DISHES} from '../shared/dish';
import DishDetail from './DishdetailComponent';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {dish: DISHES, selectedDish : null};
  }
  onSelectedDish(dishId) {
    this.setState({
        selectedDish: dishId,
    })
}
  render() {
    return (
      <div className="App">
      <Navbar dark color="primary">
      <div className="container">
      <NavbarBrand href="/">MySoulTonic</NavbarBrand>
      </div>
      </Navbar>
      <Menu dishes = {this.state.dish}
         onClick = {(dishId) => this.onSelectedDish(dishId)} />
         <DishDetail
         dish={this.state.dish.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      </div>
    );
  }
}

export default Main;
