import React, { Component } from 'react';
import Menu from "./MenuComponent";
import {DISHES} from '../shared/dish';
import Header from './HeaderComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';

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
      <Header />
      <Menu dishes = {this.state.dish}
         onClick = {(dishId) => this.onSelectedDish(dishId)} />
         <DishDetail
         dish={this.state.dish.filter((dish) => dish.id === this.state.selectedDish)[0]} />
         <Footer />
      </div>
    );
  }
}

export default Main;
