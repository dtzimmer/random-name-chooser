import React, { Component } from 'react'
import './App.css'

class NamesAvailable extends Component {
  render() {
    return (
      <div>
        <h2>Available Names</h2>
        <div>
          {this.props.names.map((name, i) => {
            return <li key={i} >{name}</li>
          })}
        </div>
      </div>
    )
  }
}

export default NamesAvailable
