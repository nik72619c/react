import React, { Component } from 'react';

import DummyComponent from './dummyComponent';
import './App.css';

class App extends Component {

  
  handler(){
    console.log('refs', this);   //points to hoc
  }
  render() {
    return (
      <div>
        <DummyComponent/>
        {/* <DummyComponent/> */}
        <button onClick={this.handler.bind(this)}>check ref here</button>
      </div>
    );
  }
}

export default App;
