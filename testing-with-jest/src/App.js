import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      count:0
    }
  }
  handleClick(){
    this.setState({
      count: this.state.count+1
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.count}
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
