import React, { Component } from 'react';
import $ from 'jquery';
import TriviaList from './TriviaList';
import Controls from './Controls';

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      triviaArray: [],
      qty: 10,
    }
  }

  componentDidMount() {
    this.getTrivia();
  }

  setQty(qty) {
    //add some codes
  }

  getTrivia() {
    // fetch the url https://opentdb.com/api.php?amount=10&category=27&type=multiple
    // then parse it (because it's a string right now)
    // then console.log it
    // don't forget a catch

    fetch('https://opentdb.com/api.php?amount=10&category=27&type=multiple')
    .then( (response) => response.json() )
    .then( (data) => this.setState({ triviaArray: data.results }) )
    .catch( (error) => console.log('Error retreiving trivia: ', error) )
  }

  render() {
    let { qty, triviaArray } = this.state;
    return (
      <div>
        <h1>TRIVIA!</h1>
        <Controls qty={qty}
                  setQty={this.setQty.bind(this)}
                  getTrivia={this.getTrivia.bind(this)}/>
        <TriviaList triviaArray={triviaArray}/>
      </div>
    )
  }
}
