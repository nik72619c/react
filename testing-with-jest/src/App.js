import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  handleClick(){
    return "handleClick";
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer" onClick={this.handleClick.bind(this)}
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
