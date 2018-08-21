import React, { Component } from 'react'
import './App.css'

class NameDisplay extends Component {
  render() {
    return (
      <div>
        <h1>"You have been chosen..."</h1>
        <div className="namedisplay">
          <h4>Name will display HERE</h4>
          <form>
            <button type="submit">Choose a Name</button>
          </form>
        </div>
      </div>
    )
  }
}

export default NameDisplay