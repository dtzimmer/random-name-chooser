import React, { Component } from 'react'
import './App.css'
import Logo from './The CLAW (1).jpg'

import NameSubmit from './NameSubmit'
import NameDisplay from './NameDisplay'
import NamesChosen from './NamesChosen'
import NamesAvailable from './NamesAvailable'

class App extends Component {
  handleSubmit = (event, firstName) => {

    event.preventDefault();
    console.log('HandleSubmit Called')
    this.setState({
      propfname: firstName,
    })
  }


  render() {
    return (
      <div>
        <h1>TheClaw.netlify.com</h1>
        <img className="logo" src={Logo} alt="the claw logo" />
        <div className="NameDisplay">
          <NameDisplay />
        </div>
        <div className="componentsrow">
          <div className="componentdisplay">
            <NameSubmit handleSubmit={this.handleSubmit} />
          </div>
          <div className="componentdisplay">
            <NamesAvailable />
          </div>
          <div className="componentdisplay">
            <NamesChosen />
          </div>
        </div>
      </div>
    )
  }
}

export default App
