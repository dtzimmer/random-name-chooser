import React, { Component } from 'react'
import './App.css'
import Logo from './The CLAW (1).jpg'

import NameSubmit from './NameSubmit'
import DisplayWinner from './DisplayWinner'
import NamesChosen from './NamesChosen'
import NamesAvailable from './NamesAvailable'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { names: [], name: '', chosen: [] }
  }

  handleSubmit = (event, firstName) => {
    event.preventDefault();
    let namearray = this.state.names
    namearray.push(firstName)
    this.setState ({ names: namearray})
    // this.setState({ names: '' });
  }

  displayWinner = () => {
    if (this.state.names.length > 0) {
      console.log('DISPLAY WINNER')
      const chosen = this.state.names[Math.floor(Math.random() * this.state.names.length)]
      this.setState(oldState => {
        return {
          chosen: [ ...oldState.chosen],
          names: oldState.names.filter((name) => {
            return name !== chosen
          })
        }
      })
    }
  }

  render() {
    return (
      <div>
        <h1>TheClaw.netlify.com</h1>
        <img className="logo" src={Logo} alt="the claw logo" />
        <div className="NameDisplay">
          <DisplayWinner />
        </div>
        <div className="componentsrow">
          <div className="componentdisplay">
            <NameSubmit handleSubmit={this.handleSubmit} />
          </div>
          <div className="componentdisplay">
            <NamesAvailable names={this.state.names} />
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
