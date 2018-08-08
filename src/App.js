import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PhoneDisplay from './components/PhoneDisplay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Test</h1>
        <PhoneDisplay />
      </div>
    );
  }
}

export default App;
