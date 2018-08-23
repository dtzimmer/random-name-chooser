import React, { Component } from 'react'
import './App.css'

class DisplayWinner extends Component {
  render() {
    return (
      <div>
        <h1>"You have been chosen..."</h1>
        <div className="namedisplay">
          <h4>'The Claw' chooses who will stay and who must go...</h4>
            <button type="button" onClick={() => this.displayWinner()}>
              The Claw Chooses...
            </button>
          <p>"Farewell my friend...</p>
          <p>You go on to a better place."</p>
        </div>
      </div>
    )
  }
}

export default DisplayWinner