import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import {Container, FormContainer, BodyContainer, Button, NavContainer} from "../StyledComponents/DefaultStyle"
class Nav extends Component {
    render() {
        return (
            <NavContainer>

                <div>
                    <Link to="/"><button>Home</button></Link>
                    <Link to="/categories"><button>Categories</button></Link>
                </div>
                <div>
                    <h3>Walkthrough Creator</h3>
                </div>
                <div>
                    <Link to='/Users/Home'><button>User Home</button></Link>
                    <button onClick={this.props.signOut}>Sign Out</button>
                </div>
            </NavContainer>
        );
    }
}

export default Nav;