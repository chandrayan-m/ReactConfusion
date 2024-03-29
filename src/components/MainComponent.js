import React, { Component } from 'react';
import Menu from "./MenuComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import Header from './HeaderComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';
import { addComment, fetchDishes } from '../redux/actioncreator';

const mapDispatchToProps = dispatch => ({  
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => {dispatch(fetchDishes())}
});

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
class Main extends Component {

  componentDidMount(){
    this.props.fetchDishes();
  }
  render() {
    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            isLoading={this.props.dishes.isLoading}
            errMss={this.props.dishes.errMss}  
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
            addComment={this.props.addComment}
            />
      );
    };

    const HomePage = () => {
      return (
        <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMss={this.props.dishes.errMss}
          promotion ={this.props.promotions.filter((promo) => promo.featured)[0]}
        leader ={this.props.leaders.filter((leader) => leader.featured)[0]} 
        />
      );
    }
    return (
      <div className="App">
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/menu" component={ () => <Menu dishes= {this.props.dishes} />} />
        <Route path='/menu/:dishId' component={DishWithId} />
        <Route path="/contactus" component =  {Contact} />
        <Route path= "/aboutus" component = { () => <About leaders = {this.props.leaders} /> }/>
        <Redirect to="/home" />
      </Switch>
     <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
