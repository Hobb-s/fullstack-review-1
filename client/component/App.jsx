import React, { Component } from 'react';
import Login from '../component/Login';

class App extends Component {
  constructor () {
    super()
    this.state = {
      isLoggedIn: false
    }
  }

  isLoggedInHandler() {
    this.setState({ isLoggedIn: true });
  }

  render() {
    return (
      <div>
        HELLO FROM REACT APP
        <Login />
      </div>
    )
  }
}

export default App;