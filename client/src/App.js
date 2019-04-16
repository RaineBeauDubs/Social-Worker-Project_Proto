import React, { Component } from 'react';
import './App.css';

import Authenticate from './components/auth/Authentication';

const App = Authenticate(
  class App extends Component {
    render() {
      return (
        <div className="App">
          <h1>Hai, frens!</h1>
        </div>
      );
    }
  }
)

export default Authenticate(App);