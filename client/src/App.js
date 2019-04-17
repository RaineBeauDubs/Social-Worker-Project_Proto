import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';


// import Authenticate from './components/auth/Authentication';
import Navigation from './components/Navigation';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Students from './components/students/Students';

// const App = Authenticate(
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
            path='/login'
            component={Login}
          />
          <Route 
            path='/register'
            component={Register}
          />
          <Route 
            path='/students'
            component={Students}
          />
        </div>
      );
    }
  }
// )

export default App;
// export default Authenticate(App);