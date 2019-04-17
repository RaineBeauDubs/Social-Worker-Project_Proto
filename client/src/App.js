import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';


import Authenticate from './components/auth/Authentication';
import Navigation from './components/Navigation';
import Students from './components/students/Students';

const App = Authenticate(
  class App extends Component {
    render() {
      return (
        <div className="App">
          <h1>Hai, frens!</h1>
          <Route 
          path='/' 
          component={Navigation}
        />
          <Route 
            path='/students'
            component={Students}
          />
        </div>
      );
    }
  }
)

export default Authenticate(App);