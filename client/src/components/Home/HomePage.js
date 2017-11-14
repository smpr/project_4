import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
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

    signUp = (event) => {
        event.preventDefault()
        this.props.signUp(
            this.state.email,
            this.state.password,
            this.state.password_confirmation
        )
    }

    signIn = (event) => {
        event.preventDefault()
        this.props.signIn(
            this.state.email,
            this.state.password
        )
        this.setState({ redirectToCategoryPage: true })
    }

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
                            <label htmlFor="password_confirmation">Confirm Password: </label>
                            <input onChange={this.handleChange} type="password" name="password_confirmation"
                                value={this.state.password_confirmation} />
                        </div>
                        <div>
                            <Button onClick={this.signUp}>Sign Up</Button>
                            <Button onClick={this.signIn}>Log In</Button>
                        </div>

                    </form>
                </FormContainer>
            </BodyContainer>
        )
    }
}

export default SignUpLogIn