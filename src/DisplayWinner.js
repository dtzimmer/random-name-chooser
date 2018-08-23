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
            <p>The Claw chooses who will stay and who must go...</p>
            <button type="button" onClick={() => this.displayWinner()}>
              The Claw Chooses...
            </button>
            <p>"Farewell my friend...</p>
            <p>You go on to a better place."</p>
          </div>
        </div>
      </div>
    )
  }
}

export default DisplayWinner