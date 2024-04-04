import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn';

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SignIn/>
      </div>
    );
  }
}

export default App;

