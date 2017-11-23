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
                        <Link to="/"><RaisedButton label="Home" style={Style} /></Link>
                        <Link to="/categories"><RaisedButton label="Categories" style={Style} /></Link>
                    </div>
                    <div>
                        <h3>Walkthrough Creator</h3>
                    
                    </div>
                    <div>
                        <Link to='/Users/Home'><RaisedButton label="User Home" style={Style} /></Link>
                        <RaisedButton onClick={this.props.signOut} label="Log Out" style={Style} />
                    </div>
              
            </NavContainer>
        );
    }
}

export default Nav;