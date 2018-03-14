import React, { Component } from 'react';
import logo from './logo.svg';
import 'react-router';
import Nav from './components/Nav/Nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav />
      </div>
    );
  }
}

export default App;
