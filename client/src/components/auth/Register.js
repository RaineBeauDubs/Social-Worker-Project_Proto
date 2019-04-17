import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // firstName: '',
      // lastName: '',
      // username: '',
      // phone: '',
      // password: '',
      // confirmPass: '',
      // organization: ''
      name: '',
      username: '',
      contactInfo: '',
      password: '',
      organization: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  registerNewUser = event => {
    event.preventDefault();
    const {
      name,
      username,
      contactInfo,
      password,  
      organization 
    } = this.state;
    let newUser = {
      name,
      username,
      contactInfo,
      password,  
      organization 
    };
    // const {
    //   firstName,
    //   lastName,
    //   username,
    //   phone,
    //   password,  
    //   organization 
    // } = this.state;
    // let newUser = {
    //   firstName,
    //   lastName,
    //   username,
    //   phone,
    //   password, 
    //   organization 
    // };

    axios
      .post(
        'https://educell.herokuapp.com/api/register', 
        newUser, 
        { headers: {
          Authorization: localStorage.getItem('token')
        }}
      )
      .then(response => {
        if (response.status === 201) {
          console.log(response.data)
        } else {
          throw new Error('Oops! Something went wrong!')
        }
        // this.props.history.push('/')
      })
      .catch(error => console.log(error))
    this.props.history.push('/login')
  }

  render() {
    return (
      <div>
        <h1>Create an Educell Account</h1>
        <form onSubmit={this.registerNewUser}>
          {/* <input 
            name="firstName"
            type="text"
            value={this.state.firstName}
            onChange={this.handleChange}
            required
          /> */}
          <input 
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <input 
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
            required
          />
          <input 
            name="contactInfo"
            type="text"
            value={this.state.contactInfo}
            onChange={this.handleChange}
            required
          />
          <input 
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          {/* <input 
            name="confirmPass"
            type="password"
            value={this.state.confirmPass}
            onChange={this.handleChange}
            required
          /> */}
          <input 
            name="organization"
            type="text"
            value={this.state.organization}
            onChange={this.handleChange}
            required
          />
          <button type='submit'>Register</button>
        </form>
      </div>
    )
  }
}

export default Register;