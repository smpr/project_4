import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import {Container, FormContainer, BodyContainer, Button, NavContainer} from "../StyledComponents/DefaultStyle"
class Nav extends Component {
    render() {
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