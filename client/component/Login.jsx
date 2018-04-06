import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

  }

  onChangeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log('this is the state', this.state);
  }

  onSignUpHandler() {
    console.log('fired sign up handler');
    const payload = {
      username: this.state.username,
      password: this.state.password
    }
    axios.post('/api/user/signup', payload)
      .then( response => {
        console.log(`Server replied with ... ${response}`);
      })
      .catch( error => {
        console.log(`Server errored out with ... ${error}`);
      })
  }

  render() {
    return(
      <div>
        <div>Username: </div>
        <input 
          name='username'
          onChange={ this.onChangeHandler.bind(this) }
        />
        <br/><br/>
        <div>Password:</div>
        <input 
          name='password'
          type='password'
          onChange={ this.onChangeHandler.bind(this) }
        />
        <br/><br/>
        <button 
          onClick={ this.onSignUpHandler.bind(this)}
        >Sign Up</button>
      </div>
    )
  }
}

export default Login;