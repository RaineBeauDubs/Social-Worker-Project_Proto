import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loggedIn: false
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
      username: this.state.username,
      password: this.state.password
    }
    axios
      .post(
        'https://educell.herokuapp.com/api/login',
        user,
        {
          headers: {
            Authorization: localStorage.getItem('token')
          }
        }
      )
      .then(response => {
        if (response.status === 200) {
          localStorage.setItem('token', response.data.token)
          console.log(response.data)
          this.setState({
            loggedIn: true
          })
        } else {
          throw new Error()
        }
      })
      .catch(error => console.log(error))
    this.props.history.push('/students')
  }

  render() {
    return (
      <div>
        <h1>Welcome Back to Educell</h1>
        <form onSubmit={this.setUser}>
          <h2>Username</h2>
          <input
            type='text'
            name='username'
            onChange={this.handleChange}
            value={this.state.username}
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
          <NavLink to='/register'>
            <h4>Don't have an account? Register here!</h4>
          </NavLink>
          <h4>Forgot password?</h4>
          <h5>By logging in, you are agreeing to our terms of service</h5>
        </form>
      </div>
    )
  }
}

export default Login;