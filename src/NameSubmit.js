import React, { Component } from 'react';
import './App.css';


class NameSubmit extends Component {
  constructor(props) { //The constructor method is a special method for creating and initializing an object created within a class.
    super(props)
    this.state = {
      firstName: ''
    }
  }

  submitAndClear = (e) => {
    this.props.handleSubmit(e, this.state.firstName);
    this.setState({firstName: ''});
    console.log(this.state.firstName);
  }

  render() {
    return (
      <div>
        <h2>Submit Name</h2>
        <form onSubmit={e => this.submitAndClear(e)}>
          <input type="text" id="firstname" name="firstname"
                 placeholder="First name" value={this.state.firstName} onChange={e => this.setState({ firstName: e.target.value})}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default NameSubmit;