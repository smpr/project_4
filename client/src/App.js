import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import { clearAuthTokens, saveAuthTokens, setAxiosDefaults, userIsLoggedIn } from "./util/SessionHeaderUtil"

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
  state = {
    signedIn: false,
    categories: ""
  }
  async componentWillMount() {
    try {
      const signedIn = userIsLoggedIn()

      let categories = []
      if (signedIn) {
        setAxiosDefaults()
        categories = await this.getCategories()
      }

      this.setState({
        categories,
        signedIn,
      })
    } catch (error) {
      console.log(error)
    }
  }
  signUp = async (email, password, password_confirmation) => {
    try {
      const payload = {
        email: email,
        password: password,
        password_confirmation: password_confirmation
      }
      const response = await axios.post('/auth', payload)
      saveAuthTokens(response.headers)

      this.setState({
        signedIn: true,
      })

    } catch (error) {
      console.log(error)
    }
  }

  signIn = async (email, password) => {
    try {
      const payload = {
        email,
        password
      }
      const response = await axios.post('/auth/sign_in', payload)
      saveAuthTokens(response.headers)

      // make this get categories
      const categories = await this.getCategories()


      this.setState({
        signedIn: true,
        categories
      })

    } catch (error) {
      console.log(error)
    }
  }
  signOut = async (event) => {
    try {
      event.preventDefault()

      await axios.delete('/auth/sign_out')

      clearAuthTokens();

      this.setState({ signedIn: false })
    } catch (error) {
      console.log(error)
    }
  }
  getCategories = async () => {
    try {
      const response = await axios.get('/api/categories')
      return response.data
    } catch (error) {
      console.log(error)
      return []
    }
  }
  render() {
    const SignUpLogInComponent = () => (
      <HomePage
        signUp={this.signUp}
        signIn={this.signIn}
        signOut={this.signOut} />
    )
    return (
      <Router>
        <div>
          <Header />
          <Nav />
          {this.state.signedIn ? null : <Redirect to="/Categories" />}
          <Switch>
            <Route exact path="/" render={SignUpLogInComponent} />
           

            <Route exact path="/Users/:userId/Meetups" component={MeetUps} />
            <Route exact path="/Users/:userId/Meetups/:meetId/MeetupDetails" component={MeetDetails} />


            <Route exact path="/Categories/" component={CatHome} />
            <Route exact path="/Categories/Create" component={CatCreate} />
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
