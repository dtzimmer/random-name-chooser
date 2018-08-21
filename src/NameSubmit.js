import React, { Component } from 'react';
import './App.css';


class NameSubmit extends Component {
  constructor(props) { //The constructor method is a special method for creating and initializing an object created within a class.
    super(props) // The super keyword can also be used to call functions on a parent object.
    this.state = {
      firstName: []
    }
  }

  handleSubmit = (event) => {//State is assigned to the prop names here. This is to prevent instant rendering of values onChange
    // In a class arrow function's 'this' are always bound to the class
    this.setState({
      propfname: this.state.firstName,
    })
    event.preventDefault() //preventing a refresh of the page
  }

  render() {
    return (
      <div>
        <h2>Submit Name</h2>
        <form onSubmit={this.handleSubmit}>
          <label for="firstname">First Name</label>
          <input type="text" id="firstname" name="firstname"
                 placeholder="First name" onChange={e => this.setState({ firstName: e.target.value})}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default NameSubmit;