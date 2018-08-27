import React, { Component } from 'react';
import './App.css';
import Canvas from './components/Canvas';
import Div from './components/Div';
import picture from './static/pictures/mainPicture.png';
import scrollIntoView from 'scroll-into-view';

class App extends Component {
  state = {
    links: {
      passion: 'https://ianpricemb.github.io/newFFXTrivia',
      excellence: 'https://thegeeze.herokuapp.com/',
      experience: 'https://ianpricemb.github.io/overCoach'
    },
    passion: false,
    excellence: false,
    experience: false
  }

  google = () => {
    document.getElementById('iframe').setAttribute('src', 'https://thegeeze.herokuapp.com/')
  }
  autoScroll = location => {
    var element = document.getElementById(location)
    scrollIntoView(element, {time: 4000});
  }
  linkClick = (location, e) => {
    e.preventDefault();
    this.setState({[location]: true});
    document.getElementById(location).getElementsByTagName('iframe')[0].setAttribute('src', this.state.links[location])
  }
  closeSite = (location, e) => {
    e.preventDefault();
    this.setState({[location]: false});
    document.getElementById(location).getElementsByTagName('iframe')[0].removeAttribute('src')
  }
  render() {
    return (
      <div className="App">
        <Div id='home' style={{backgroundColor: 'black'}}>
          <img src={picture} alt='background' style={{display: 'block', width:'100%', height: '100%', zIndex: 2}}/>
          <nav style={{zIndex: 3, position: "absolute", bottom: '20vh', left: '40vh', color: '#e0fdc2'}}>
            <h2 onClick={(e) => this.autoScroll('passion')} style={{cursor: 'pointer'}}>Passion</h2>
            <h2 onClick={(e) => this.autoScroll('excellence')} style={{textIndent:'1em', cursor: 'pointer'}}>Excellence</h2>
            <h2 onClick={(e) => this.autoScroll('experience')} style={{textIndent:'2em', cursor: 'pointer'}}>Experience</h2>

          </nav>
          <Canvas style={{height: '100vh', zIndex: 1}}/>
        </Div>

        {/* this section is all about the website that I feel encompases the feeling of 'passion */}
        <Div id='passion' style={{color: 'white'}}>
          {/* this is a link to the website that i feel represents 'passion' */}
          <iframe id='iframe' title='passion' frameBorder="0" style={{width: '90%', height: '90vh', overflow: 'auto', position: 'absolute', zIndex:1,  margin: 'auto', top: '0', left: '0', bottom: '0', right: '0'}}/>

          {/* this section is the cover over the website giving a bit of a background to what is underneath */}
          {this.state.passion===false?(<div>
            <div style={{width: '100%', height: '100%', backgroundColor: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', position: 'absolute', zIndex: 3}}>
            <div style={{alignSelf: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
              <h1 style={{textAlign: 'center'}}>Passion</h1>
              <h3 style={{textAlign: 'center'}}>Final Fantasy X Trivai: Remastered</h3>
              <h5 style={{textAlign: 'center'}}>JavaScript, jQuery, HTML5 Video & Audio, CSS Flex-Box, Adobe Photoshop, Adobe Premiere Pro, YouTube iFrame API</h5>
              <button onClick={(e) => this.linkClick('passion', e)} style={{padding: 10, borderRadius: 20, backgroundColor: 'red', border: 'white solid', color: 'white', fontSize: '1.5em', alignSelf: 'center'}}>view</button>
            </div>
            <span onClick={(e) => this.autoScroll('home')} style={{padding: '10px 5px', position: 'absolute', left: '0', bottom: '0', zIndex: 2}}>Home</span>
            <span onClick={(e) => this.autoScroll('excellence')} style={{padding: '10px 5px', position: 'absolute', right: '0', bottom: '0', zIndex: 2}}>Excellence</span>
          </div>
          </div>):(<div>
          {/* these are a set of link and extra info to remind the viewer that they are currently on my website and not on one of th other websites they are looking at */}
          <span style={{position: 'absolute', zIndex:0,  margin: 'auto', top: '0', left: '0', bottom: '0', right: '0', height: '3em', fontSize: '3em', width: '30vw', textAlign: 'center'}}> Loading </span>
          <span style={{padding: '10px 5px', position: 'absolute', top: '0', left: '0', zIndex: 2}}><a href='https://github.com/IanPriceMB/newFFXTrivia' target='_blank'>Final Fantasy X Trivia: Remastered</a></span>
          <span onClick={(e) => this.closeSite('passion', e)} style={{padding: '10px 5px', position: 'absolute', top: '0', right: '0', zIndex: 2}}>close this site</span>
          <span onClick={(e) => this.autoScroll('home')} style={{padding: '10px 5px', position: 'absolute', left: '0', bottom: '0', zIndex: 2}}>Home</span>
          <span onClick={(e) => this.autoScroll('excellence')} style={{padding: '10px 5px', position: 'absolute', right: '0', bottom: '0', zIndex: 2}}>Excellence</span>
          </div>)}
        </Div>

        {/* this section is all about the website that I feel encompases the feeling of 'excellence */}
        <Div id='excellence' style={{color: 'black'}}>
          {/* this is a link to the website that i feel represents 'excellence' */}
          <iframe id='iframe' title='excellence' frameBorder="0" style={{width: '90%', height: '90vh', overflow: 'auto', position: 'absolute', zIndex:1,  margin: 'auto', top: '0', left: '0', bottom: '0', right: '0'}}/>

          {/* this section is the cover over the website giving a bit of a background to what is underneath */}
          {this.state.excellence===false?(<div>
            <div style={{width: '100%', height: '100%', backgroundColor: 'gold', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', position: 'absolute', zIndex: 3}}>
            <div style={{alignSelf: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
              <h1 style={{textAlign: 'center'}}>Excellence</h1>
              <h3 style={{textAlign: 'center'}}>The Geeze Website</h3>
              <h5 style={{textAlign: 'center'}}>JavaScript, CSS Grids, Express, Cheerio, Mongo DB, Mongoose, Adobe Photoshop, Adobe Premiere Pro, Adobe After Effects</h5>
              <button onClick={(e) => this.linkClick('excellence', e)} style={{padding: 10, borderRadius: 20, backgroundColor: 'gold', border: 'black solid', color: 'black', fontSize: '1.5em', alignSelf: 'center'}}>view</button>
            </div>
            <span onClick={(e) => this.autoScroll('home')} style={{padding: '10px 5px', position: 'absolute', left: '0', bottom: '0', zIndex: 2}}>Home</span>
            <span onClick={(e) => this.autoScroll('experience')} style={{padding: '10px 5px', position: 'absolute', right: '0', bottom: '0', zIndex: 2}}>Experience</span>
            <span onClick={(e) => this.autoScroll('passion')} style={{padding: '10px 5px', position: 'absolute', right: '0', top: '0', zIndex: 2}}>Passion</span>
          </div>
          </div>):(<div style={{color: 'white'}}>
          {/* these are a set of link and extra info to remind the viewer that they are currently on my website and not on one of th other websites they are looking at */}
          <span style={{position: 'absolute', zIndex:0,  margin: 'auto', top: '0', left: '0', bottom: '0', right: '0', height: '3em', fontSize: '3em', width: '30vw', textAlign: 'center'}}> Loading </span>
          <span style={{padding: '10px 5px', position: 'absolute', top: '0', left: '0', zIndex: 2}}><a href='https://github.com/IanPriceMB/theGeezeWebsite' target='_blank'>The Geeze Website</a></span>
          <span onClick={(e) => this.closeSite('excellence', e)} style={{padding: '10px 5px', position: 'absolute', top: '0', right: '0', zIndex: 2}}>close this site</span>
          <span onClick={(e) => this.autoScroll('home')} style={{padding: '10px 5px', position: 'absolute', left: '0', bottom: '0', zIndex: 2}}>Home</span>
          <span onClick={(e) => this.autoScroll('experience')} style={{padding: '10px 5px', position: 'absolute', right: '0', bottom: '0', zIndex: 2}}>Experience</span>
          </div>)}
        </Div>

          {/* this section is all about the website that I feel encompases the feeling of 'experience */}
          <Div id='experience' style={{color: 'white'}}>
          {/* this is a link to the website that i feel represents 'experience' */}
          <iframe id='iframe' title='experience' frameBorder="0" style={{width: '90%', height: '90vh', overflow: 'auto', position: 'absolute', zIndex:1,  margin: 'auto', top: '0', left: '0', bottom: '0', right: '0'}}/>

          {/* this section is the cover over the website giving a bit of a background to what is underneath */}
          {this.state.experience===false?(<div>
            <div style={{width: '100%', height: '100%', backgroundColor: 'navy', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', position: 'absolute', zIndex: 3}}>
            <div style={{alignSelf: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
              <h1 style={{textAlign: 'center'}}>Experience</h1>
              <h3 style={{textAlign: 'center'}}>Over Coach</h3>
              <h5 style={{textAlign: 'center'}}>JavaScript, jQuery, MySQL, Sequelize, Express, Passport JS, Bycrypt, Canvas, Adobe Photoshop</h5>
              <button onClick={(e) => this.linkClick('experience', e)} style={{padding: 10, borderRadius: 20, backgroundColor: 'navy', border: 'white solid', color: 'white', fontSize: '1.5em', alignSelf: 'center'}}>view</button>
            </div>
            <span onClick={(e) => this.autoScroll('home')} style={{padding: '10px 5px', position: 'absolute', left: '0', bottom: '0', zIndex: 2}}>Home</span>
            <span onClick={(e) => this.autoScroll('excellence')} style={{padding: '10px 5px', position: 'absolute', right: '0', top: '0', zIndex: 2}}>Excellence</span>
            <span onClick={(e) => this.autoScroll('passion')} style={{padding: '10px 5px', position: 'absolute', left: '0', top: '0', zIndex: 2}}>Passion</span>
            <span onClick={(e) => this.autoScroll('home')} style={{padding: '10px 5px', position: 'absolute', right: '0', bottom: '0', zIndex: 2}}>Top of Page</span>
          </div>
          </div>):(<div>
          {/* these are a set of link and extra info to remind the viewer that they are currently on my website and not on one of th other websites they are looking at */}
          <span style={{position: 'absolute', zIndex:0,  margin: 'auto', top: '0', left: '0', bottom: '0', right: '0', height: '3em', fontSize: '3em', width: '30vw', textAlign: 'center'}}> Loading </span>
          <span style={{padding: '10px 5px', position:'absolute', top: '0', left: '0', zIndex: 2}}><a href='https://github.com/IanPriceMB/overCoach' target='_blank'>Over Coach</a></span>
          <span onClick={(e) => this.closeSite('experience', e)} style={{padding: '10px 5px', position: 'absolute', top: '0', right: '0', zIndex: 2}}>close this site</span>
          <span onClick={(e) => this.autoScroll('home')} style={{padding: '10px 5px', position: 'absolute', left: '0', bottom: '0', zIndex: 2}}>Home</span>
          <span onClick={(e) => this.autoScroll('home')} style={{padding: '10px 5px', position: 'absolute', right: '0', bottom: '0', zIndex: 2}}>Top of Page</span>
          </div>)}
        </Div>

        <Canvas style={{backgroundColor: 'rgb(49, 0, 0)', height: 'calc(400vh + 800px)'}} />
      </div>
    );
  }
}

export default App;