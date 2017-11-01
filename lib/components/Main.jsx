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


  setQty(qty) {
    //add some codes
  }

  getTrivia() {
    //add some codes
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
