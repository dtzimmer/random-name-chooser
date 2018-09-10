import React, { Component } from 'react'
import './App.css'
import ClawIcon from './ClawIcon.jpg'
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

  handleReset = (event) => {
    event.preventDefault()
    let names = this.state.names
    this.setState(oldState => {
      return {
        names: [...names, ...oldState.chosen],
        chosen: []
      }
    })
  }

  render() {
    return (
      <div>
        <div className="banner">
          <img className="icon" src={ClawIcon} alt="claw icon" />
          <h1>The Claw</h1>
        </div>

        <div className="displaywinner">
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
            <NamesChosen chosen={this.state.chosen} resetName={this.handleReset} />
          </div>
        </div>

      </div>
    )
  }
}

export default App
