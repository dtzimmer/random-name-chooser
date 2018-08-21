import React, { Component } from 'react';
import './App.css';

class NamesChosen extends Component {
  render() {
    return (
      <div>
        <h2>Already Chosen Names</h2>
        <form>
          <button type="submit">Reset</button>
        </form>
      </div>
    );
  }
}

export default NamesChosen;