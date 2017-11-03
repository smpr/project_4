import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Nav from './components/BoilerPlate/Nav'
import HomePage from './components/Home/HomePage'
import CatHome from './components/Category/CatHome'
import CatCreate from './components/Category/CatCreate'

import WalkHome from './components/WalkThrough/WalkThroughHome'
import WalkCreate from './components/WalkThrough/WalkThroughCreate'
import StepsHome from './components/Steps/StepHome.js'
import StepsCreate from './components/Steps/StepCreate.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
       
        <Switch>
        <Route exact path="/" component={CatHome} />
        <Route exact path="/Create" component={CatCreate} />
        <Route exact path="/Categories/:categoryId/WalkThroughs" component={WalkHome} /> 
        <Route exact path="/Categories/:categoryId/WalkThroughs/Create" component={WalkCreate} />       
        <Route exact path="/Categories/:categoryId/WalkThroughs/:walkthroughId/Steps" component={StepsHome} />
        <Route exact path="/Categories/:categoryId/WalkThroughs/:walkthroughId/Steps/Create" component={StepsCreate} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
