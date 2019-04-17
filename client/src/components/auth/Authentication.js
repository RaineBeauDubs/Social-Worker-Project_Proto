import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';

const Authenticate = App =>
  class extends Component {
    constructor(props){
      super(props);
        this.state = {
          loggedIn: false,
        }
    }

    componentDidMount() {
      if (localStorage.getItem('token')) {
        this.setState({
          loggedIn: true
        });
      } else {
        this.setState({
          loggedIn: false
        });
      }
    }

    render() {
      if (this.state.loggedIn) {
        return <App />
      } else {
        return <Login /> || <Register />
      }
    }
  }

export default Authenticate;