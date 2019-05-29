import React, {Component} from 'react';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import {slide as Menu} from 'react-burger-menu';

import CreationFull from './creation-full/creation-full.component';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <Menu>
            <a id="home" className="menu-item" href="/home">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="default" className="menu-item" href="/">Home</a>
            <div id="copyright" className="copyright">Exalted is © White Wolf AB and Onyx Path.</div>
          </Menu>
          <Switch>
            <Route path="/home" component={CreationFull} />
            <Route path="/about" component={About} />
            <Redirect from="/" to="/home" />
          </Switch>

        </div>
      </HashRouter>
    );
  }
}

const Home = () => <div><h2>Home</h2></div>
const About = () => <div><h2>About</h2></div>

export default App;
