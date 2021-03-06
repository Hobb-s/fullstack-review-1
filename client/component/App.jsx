import React, { Component } from 'react';
import Login from './Login';
import Home from './Home';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    }
  }

  isLoggedInHandler() {
    this.setState({ isLoggedIn: true });
    console.log('this is the app log in state: ', this.state.isLoggedIn);
  }

  render() {
    return (
      <div>
        {
          this.state.isLoggedIn ? 
            <div>
              <Home />
            </div>
            :
            <div>
              <Login 
                toggleLoggedIn={this.isLoggedInHandler.bind(this)}
              />
            </div>
        }
      </div>
    )
  }
}

export default App;