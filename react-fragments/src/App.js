import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <>   //react fragment shorter syntax

        <p>this is a p tag</p>
        <p>another p tag without being wrapped</p>
      </>
    );
  }
}

export default App;
