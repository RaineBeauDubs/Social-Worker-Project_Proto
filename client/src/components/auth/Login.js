import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  setUser = event => {
    event.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    axios
      .post('https://educell.herokuapp.com/api/login', user)
      .then(response => {
        localStorage.setItem('token', response.data.token)
      });
  }

  render() {
    return (
      <div>
        <h1>Welcome Back to Educell</h1>
        <form onSubmit={this.setUser}>
          <h2>Email</h2>
          <input
            type='text'
            name='email'
            onChange={this.handleChange}
            value={this.state.email}
            required
          />
          <h2>Password</h2>
          <input
            type='text'
            name='password'
            onChange={this.handleChange}
            value={this.state.password}
            required
          />
          <button type='submit'>Sign In</button>
          <h4>Forgot password?</h4>
          <h5>By logging in, you are agreeing to our terms of service</h5>
        </form>
      </div>
    )
  }
}

export default Login;