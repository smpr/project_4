import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import {Container, FormContainer, BodyContainer} from "../StyledComponents/DefaultStyle"
import RaisedButton from 'material-ui/RaisedButton';


const style = {
    // width: '10%',
    height: '95%',
    margin: '10px',
    border: '.5px solid #37474F',
    backgroundColor: '#37474F'
  };

class SignUpLogIn extends Component {

    state = {
        email: '',
        password: '',
        password_confirmation: '',
        redirectToCategoryPage: false
    }

//devise function that allows the user thats already been create to sign in
    signIn = (event) => {
        event.preventDefault()
        this.props.signIn(
            this.state.email,
            this.state.password
        )
        this.setState({ redirectToCategoryPage: true })
    }
//allows the change field to alter state
    handleChange = (event) => {
        const newState = { ...this.state }
        newState[event.target.name] = event.target.value
        this.setState(newState)
    }

    render() {
        if (this.state.redirectToCategoryPage) {
            return <Redirect to={`/Categories`} />
        }

        return (
            <BodyContainer>
                <Container>
                    <FormContainer>
  
                    
                        <form>
                            <div>
                                <h2>Log In</h2>
                            </div>
                            <div>
                                <label htmlFor="email">E-mail: </label>
                                <input onChange={this.handleChange} type="text" name="email" value={this.state.email} />
                            </div>
                            <div>
                                <label htmlFor="password">Password: </label>
                                <input onChange={this.handleChange} type="password" name="password" value={this.state.password} />
                            </div>
                            <div>
                                <Link to={`/Users/Create`}><RaisedButton label="Sign up" style={style} /></Link>
                                <RaisedButton onClick={this.signIn} label="Login" style={style} />
                            </div>

                        </form>
                   </FormContainer>
                </Container>
            </BodyContainer>
        )
    }
}

export default SignUpLogIn