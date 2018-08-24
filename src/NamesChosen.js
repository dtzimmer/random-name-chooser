import React, { Component } from 'react';
import './App.css';

class NamesChosen extends Component {
  render() {
    return (
      <div>
        <h2>Chosen Names</h2>
        <div>
          {this.props.chosen.map((name) => {
            return <li>{name}</li>
          })}
        </div>
        {/*<button type="button" onClick={(event) => this.props.resetName(event)}>*/}
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