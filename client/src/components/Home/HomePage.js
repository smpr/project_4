import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import styled from 'styled-components'

const BodyContainer = styled.div`
display:flex;
justify-content: space-around;
background-color: #323232;
height: 100vh;
`
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-content: center;
`
const FormContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-content: center;
height: 100px;
background-color: #4B4B4B;
margin: 10px;
padding: 20px;
text-align: center;
`

const Button = styled.button`
color: red;
`
class SignUpLogIn extends Component {

    state = {
        email: '',
        password: '',
        password_confirmation: '',
        redirectToCategoryPage: false
    }
//devise function that allows user to sign up
    // signUp = (event) => {
    //     event.preventDefault()
    //     this.props.signUp(
    //         this.state.email,
    //         this.state.password,
    //         this.state.password_confirmation
    //     )
    // }
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
                                <label htmlFor="email">E-mail: </label>
                                <input onChange={this.handleChange} type="text" name="email" value={this.state.email} />
                            </div>
                            <div>
                                <label htmlFor="password">Password: </label>
                                <input onChange={this.handleChange} type="password" name="password" value={this.state.password} />
                            </div>
                            <div>
                                <Link to={`/Users/Create`}><Button>Sign Up</Button></Link>
                                <Button onClick={this.signIn}>Log In</Button>
                            </div>

                        </form>
                    </FormContainer>
                </Container>
            </BodyContainer>
        )
    }
}

export default SignUpLogIn