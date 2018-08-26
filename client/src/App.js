import React, { Component } from 'react';
import './App.css';
import Canvas from './components/Canvas';
import Div from './components/Div';
import picture from './static/pictures/mainPicture.png';
import scrollIntoView from 'scroll-into-view';

class App extends Component {

  google = () => {
    document.getElementById('iframe').setAttribute('src', 'http://thegeeze.herokuapp.com/')
  }
  autoScroll = (location) => {
    var element = document.getElementById(location)
    scrollIntoView(element, {time: 4000});
  }
  render() {
    return (
      <div className="App">
        {/* <button style={{zIndex: 50, float: 'left'}} onClick={() => this.google()}>click me</button> */}
        <Div id='home'>
        {/* <img src={picture} alt='background' style={{display: 'block', width:'100%', height: '100%'}}/> */}
        <nav style={{zIndex: 3, position: "absolute", bottom: '20vh', left: '30vh'}}>
          <h2 onClick={(e) => this.autoScroll('passion')} style={{color: 'white'}}>Passion</h2>
          <h2 onClick={(e) => this.autoScroll('excellence')} style={{color: 'white'}}>Excellence</h2>
          <h2 onClick={(e) => this.autoScroll('commitment')} style={{color: 'white'}}>Commitment</h2>
          <h2 onClick={(e) => this.autoScroll('experience')} style={{color: 'white'}}>Experience</h2>
        </nav>
        <Canvas style={{height: '100vh'}}/>
        </Div>
        <Div id='passion'/>
        <Div id='excellence'></Div>
        <Div id='commitment'/>
        <Div id='experience'/>
        <Canvas style={{backgroundColor: 'rgb(49, 0, 0)', height: 'calc(300vh + 800px)'}} />
      </div>
    );
  }
}

export default App;

{/* <iframe id='iframe' style={{width: '100%', height: '100vw', overflow: 'auto'}}/> */}