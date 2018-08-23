import React, { Component } from 'react';
import './App.css';

class NamesChosen extends Component {
  render() {
    return (
      <div>
        <h2>Already Chosen Names</h2>
        <div>
          {this.props.chosen.map((name) => {
            return <li>{name}</li>
          })}
        </div>
        {/*<button type="button" onClick={() => this.props.resetName()}>*/}
          {/*Reset Names*/}
        {/*</button>*/}
        <form>
        <button type="submit">Reset</button>
        </form>
      </div>
    );
  }
}

export default NamesChosen;