import React, { Component } from 'react';
import './App.css';

const Topping = props => {
  const isSelected = props.selectedTopping === props.name;
  return (
      <li className={isSelected ? 'selected' : ''} onClick={() => props.handleClick(props.name)}>{props.name}</li>
  )
}

class ToppingList extends Component {
  constructor() {
    super();
    this.state = {
      selectedTopping: 'Cheese',
      toppings: ['Cheese', 'Anchovies', 'Broccoli']
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (name) {
    //console.log('clicked !!!!! ' , name);
    this.setState({
      selectedTopping: name
    })
  }

  render() {
    console.log('IN RENDER () - this.state.toppings = ', this.state.toppings)
    return (
      <div>
        <h1> Pizza Time!!!! </h1>
        <h2>Your fave pizza topping is: {this.state.selectedTopping}</h2>
        <ul >
          {
            /* Instead of rendering the Topping component three seperate times we can just map through our toppings array! */
            this.state.toppings.map((topping, index )=>( 
            <Topping key={index} name={topping} selectedTopping={this.state.selectedTopping} handleClick={this.handleClick}/>)
          )
          }

          {/*<Topping name="Mushrooms" selectedTopping={this.state.selectedTopping} handleClick={this.handleClick}/>
          <Topping name="Olives" selectedTopping={this.state.selectedTopping} handleClick={this.handleClick}/>
          <Topping name="Cheese" selectedTopping={this.state.selectedTopping} handleClick={this.handleClick}/>*/}
        </ul>
      </div>
    )
  }
}


export default ToppingList;
