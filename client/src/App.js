import React, { Component } from 'react';
import styles from './App.css';
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import { clearAuthTokens, saveAuthTokens, setAxiosDefaults, userIsLoggedIn } from "./util/SessionHeaderUtil"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from './components/BoilerPlate/Header'
import Nav from './components/BoilerPlate/Nav'
import HomePage from './components/Home/HomePage'


import UserCreate from './components/User/UserCreate'
import UserHome from './components/User/UserHome'
import UserEdit from './components/User/UserEdit'

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
  //this is devise sign up that will be passed down via props
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

      this.setState({ signedIn: false, redirectToLogin: true })
    } catch (error) {
      console.log(error)
    }
  }
  //grabs all categories to be passed down via props
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
        signOut={this.signOut}
        loggedIn={this.state.signedIn} />
    )
    const CreateUserSignup = () => (
      <UserCreate
        signUp={this.signUp}
      />
    )
    return (
      <MuiThemeProvider>
      <Router>
        <div>

          <Nav
            signOut={this.signOut}
          />

          <Switch>
            <Route exact path="/" render={SignUpLogInComponent} />
            <Route exact path="/signup" render={SignUpLogInComponent} />
            <Route exact path="/Users/create" render={CreateUserSignup} />
            <Route exact path="/Users/Home" component={UserHome} />
            <Route exact path="/Users/Edit" component={UserEdit} />

            
            <Route exact path="/Users/Meetups/:meetId/MeetupDetails" component={MeetDetails} />


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
      </MuiThemeProvider>
    );
  }
}

export default App;
