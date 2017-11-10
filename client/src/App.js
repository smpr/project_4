import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Header from './components/BoilerPlate/Header'
import Nav from './components/BoilerPlate/Nav'
import HomePage from './components/Home/HomePage'

import MeetUps from './components/Meetup/Meetups'
import MeetDetails from './components/Meetup/MeetupDetails'

import CatHome from './components/Category/CatHome'
import CatCreate from './components/Category/CatCreate'

import WalkHome from './components/WalkThrough/WalkThroughHome'
import WalkCreate from './components/WalkThrough/WalkThroughCreate'
import WalkEdit from './components/WalkThrough/WalkThroughEdit'

import StepsHome from './components/Steps/StepHome.js'
import StepsCreate from './components/Steps/StepCreate.js'
import StepsShow from './components/Steps/StepShow.js'
import StepsEdit from './components/Steps/StepEdit.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Nav />

          <Switch>
            <Route exact path="/" component={CatHome} />
            <Route exact path="/Create" component={CatCreate} />

            <Route exact path="/Users/:userId/Meetups" component={MeetUps} />
            <Route exact path="/Users/:userId/Meetups/:meetId/MeetupDetails" component={MeetDetails} />



            <Route exact path="/Categories/:categoryId/WalkThroughs" component={WalkHome} />
            <Route exact path="/Categories/:categoryId/WalkThroughs/:walkthroughId/Edit" component={WalkEdit} />
            <Route exact path="/Categories/:categoryId/WalkThroughs/Create" component={WalkCreate} />

            <Route exact path="/Categories/:categoryId/WalkThroughs/:walkthroughId/Steps" component={StepsHome} />
            <Route exact path="/Categories/:categoryId/WalkThroughs/:walkthroughId/Steps/Create" component={StepsCreate} />
            <Route exact path="/Categories/:categoryId/WalkThroughs/:walkthroughId/Steps/:stepId/Edit" component={StepsEdit} />
            <Route exact path="/Categories/:categoryId/WalkThroughs/:walkthroughId/Steps/:stepId/show" component={StepsShow} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
