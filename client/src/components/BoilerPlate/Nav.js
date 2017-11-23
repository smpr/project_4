import React, { Component } from 'react';
import { BrowserRouter as Link, Redirect } from 'react-router-dom'
import { NavContainer, Style} from "../StyledComponents/DefaultStyle"
import RaisedButton from 'material-ui/RaisedButton';

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
                        <RaisedButton href= "/" label="Home" style={Style} />
                        <RaisedButton href= "/categories" label="Categories" style={Style} />
                    </div>
                    <div>
                        <h3>Walkthrough Creator</h3>
                    
                    </div>
                    <div>
                        <RaisedButton href= "/Users/Home" label="User Home" style={Style} />
                        <RaisedButton onClick={this.props.signOut} label="Log Out" style={Style} />
                    </div>
              
            </NavContainer>
        );
    }
}

export default Nav;