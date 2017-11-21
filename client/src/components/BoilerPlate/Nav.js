import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import {Container, FormContainer, BodyContainer, Button, NavContainer} from "../StyledComponents/DefaultStyle"
class Nav extends Component {
    state = {

        redirectToLogin: false
    }
    
    render() {
        if (this.state.redirectToLogin) {
            return <Redirect to={`/`} />
        }
        return (
            <NavContainer>

                <div>
                    <Link to="/"><Button>Home</Button></Link>
                    <Link to="/categories"><Button>Categories</Button></Link>
                </div>
                <div>
                    <h3>Walkthrough Creator</h3>
                </div>
                <div>
                    <Link to='/Users/Home'><Button>User Home</Button></Link>
                    <Button onClick={this.props.signOut}>Sign Out</Button>
                </div>
            </NavContainer>
        );
    }
}

export default Nav;