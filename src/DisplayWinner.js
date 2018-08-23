import React, { Component } from 'react'
import './App.css'
import Alienleft from './alienleft.jpg'

class DisplayWinner extends Component {
  render() {
    return (
      <div>
        <h1>"You have been chosen..."</h1>
        <div className="row">
          <img className="logo" src={Alienleft} alt="alien left" />
          <div className="namedisplay">
            <p>The Claw chooses who will go and who will stay...</p>
            <button type="button" onClick={() => this.props.displayWinner()}>
              The Claw Chooses...
            </button>
            <h2>{this.props.picked}</h2>
            <p>"Farewell my friend...</p>
            <p>You go on to a better place."</p>
          </div>
        </div>
      </div>
    )
  }
}

export default DisplayWinner