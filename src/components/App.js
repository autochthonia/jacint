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
            <a id="creation" className="menu-item" href="/creation">Creation</a>
            <a id="blessedIsle" className="menu-item" href="/blessedIsle">Blessed Isle</a>
            <a id="default" className="menu-item" href="/">Home</a>
            <div id="copyright" className="copyright">Exalted is © White Wolf AB and Onyx Path.</div>
          </Menu>
          <Switch>
            <Route path="/creation" component={CreationFull} />
            <Route path="/blessedIsle" component={BlessedIsle} />
            <Redirect from="/" to="/creation" />
          </Switch>

        </div>
      </HashRouter>
    );
  }
}

const BlessedIsle = () => <div><h2>Blessed Isle</h2></div>

export default App;
