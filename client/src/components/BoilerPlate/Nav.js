import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import {Container, FormContainer, BodyContainer, Button, NavContainer} from "../StyledComponents/DefaultStyle"
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 4,
    
  };
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
                    <Link to="/"><RaisedButton label="Home" style={style} /></Link>
                    <Link to="/categories"><RaisedButton label="Categories" style={style} /></Link>
                </div>
                <div>
                    <h3>Walkthrough Creator</h3>
                  
                </div>
                <div>
                    <Link to='/Users/Home'><RaisedButton label="User Home" style={style} /></Link>
                    <RaisedButton onClick={this.props.signOut} label="Log Out" style={style} />
                </div>
            </NavContainer>
        );
    }
}

export default Nav;