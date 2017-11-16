import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'

const BodyContainer = styled.div`
display:flex;
justify-content: space-around;
background-color: #191919;
height: 8vh;
` 
class Nav extends Component {
    render() {
        return (
            <BodyContainer>
                
                <div>
                    <Link to="/"><button>Home</button></Link>
                    <Link to="/categories"><button>Categories</button></Link>
                </div>
                <div>
                    <Link to='/Users/Home'><button>User Home</button></Link>
                    <button onClick={this.props.signOut}>Sign Out</button>
                </div>
            </BodyContainer>
        );
    }
}

export default Nav;