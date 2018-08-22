import React, { Component } from 'react';
import './App.css';
import Canvas from './components/Canvas';
import Div from './components/Div';

class App extends Component {

  google = () => {
    console.log('here')
    document.getElementById('iframe').setAttribute('src', 'http://thegeeze.herokuapp.com/')
  }
  render() {
    return (
      <div className="App">
        <button style={{zIndex: 50, float: 'left'}} onClick={() => this.google()}>click me</button>
        <Div>
          <iframe id='iframe' style={{width: '100%', height: '100vw', overflow: 'auto'}}/>
        </Div>
        <Div />
        <Div />
        <Canvas style={{backgroundColor: 'rgb(49, 0, 0)'}} />
      </div>
    );
  }
}

export default App;
