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
    this.state = { names: [], name: '', chosen: [], picked: '' }
  }

  handleSubmit = (event, firstName) => {
    event.preventDefault()
    let namearray = this.state.names
    namearray.push(firstName)
    this.setState({ names: namearray })
  }

  displayWinner = () => {
    if (this.state.names.length > 0) {
      console.log('DISPLAY WINNER')
      const chosen = this.state.names[Math.floor(Math.random() * this.state.names.length)]
      this.setState({ picked: chosen })
      this.setState(oldState => {
        return {
          chosen: [chosen, ...oldState.chosen],
          names: oldState.names.filter((name) => {
            return name !== chosen
          })
        }
      })
    }
  }

  // resetName = (event) => {
  //   event.preventDefault()
  //   let names = this.state.names
  //   this.setState({ chosen : names })
  // }

  render() {
    return (
      <div>

        <img className="logo" src={Logo} alt="the claw logo" />

        <div className="">
          <DisplayWinner displayWinner={this.displayWinner} picked={this.state.picked} />
        </div>

        <div className="componentsrow">
          <div className="componentdisplay">
            <NameSubmit handleSubmit={this.handleSubmit} />
          </div>
          <div className="componentdisplay">
            <NamesAvailable names={this.state.names} />
          </div>
          <div className="componentdisplay">
            <NamesChosen chosen={this.state.chosen} />
          </div>
        </div>

      </div>
    )
  }
}

export default App
