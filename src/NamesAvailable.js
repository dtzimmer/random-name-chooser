import React, { Component } from 'react';
import './App.css';

class NamesAvailable extends Component {
  render() {
    return (
      <div>
        <h2>Available Names</h2>
        <div className="contactdisplay"> {/*Props are passed and rendered here in this child component*/}
          <p>{this.props.fname}</p>
        </div>
      </div>
    );
  }
}

export default NamesAvailable;