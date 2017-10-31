import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Nav from './components/BoilerPlate/Nav'
import HomePage from './components/Home/HomePage'
import WalkThrough from './components/WalkThrough/WalkThroughHome'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
        <div>Landing Page</div>
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/WalkThrough" component={WalkThrough} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
