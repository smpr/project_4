import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

const BodyContainer = styled.div`
display:flex;
justify-content: space-around;
background-color: #323232;
height: 100vh;
`
const LinkDiv = styled.div`
display:flex;
justify-content: space-between;
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
width: 25vw;
color: white;
background-color: #4B4B4B;
a {
    color: white;
    text-decoration: none;
}

`

const Button = styled.button`
color: red;
`
class UserCreate extends Component {
    state = {
        info: {
            email: '',
            password: '',
            password_confirmation: '',
            city: "",
            state: "",
            address: "",
            country: "",
            zip: "",
        },
        redirectToInfoHome: false,
        togglePage2: false,
        togglePage3: false,
        togglePage4: false,
        toggleConirm: false,
    }

    async componentWillMount() {
        try {
            const res = await axios.get('/api/infos')
            this.setState({ info: res.data })
            console.log(this.state.info)
        } catch (error) {
            console.log(error)
        }

    }
    promptToSecondForm = (event) => {
        this.setState({
            togglePage2: true
        })

    }
    promptToThirdForm = (event) => {
        this.setState({
            togglePage2: false,
            togglePage3: true
        })

    }
    promptToFourthForm = (event) => {
        this.setState({
            togglePage3: false,
            togglePage4: true
        })

    }
    handleChange = (event) => {
        const attribute = event.target.name
        const clonedInfo = { ...this.state.info }
        clonedInfo[attribute] = event.target.value
        this.setState({ info: clonedInfo })
    }
    handleSubmit = async (event) => {
        event.preventDefault()
        const res = await axios.post(`/api/infos`, this.state.info)
        this.setState({ redirectToHome: true })

    }
    nextSubmit = async (event) => {

    }
    signUp = (event) => {
        event.preventDefault()
        this.props.signUp(
            this.state.info.email,
            this.state.info.password,
            this.state.info.password_confirmation
        ),
        this.setState({
            togglePage2: true
        })
    }

    render() {
        const page1 =
            <div>
                <div>
                    <h2><b>Create User</b></h2>
                </div>
                <div>
                    E-mail:
                        <input onChange={this.handleChange} type="text" name="email" value={this.state.info.email} />
                </div>
                <div>
                    Password:
                        <input onChange={this.handleChange} type="password" name="password" value={this.state.info.password} />
                </div>
                <div>
                    Confirm Password:
                        <input onChange={this.handleChange} type="password" name="password_confirmation"
                        value={this.state.info.password_confirmation} />
                </div>
                <div><button onClick={this.signUp}>Next</button></div>
            </div>
        const page2 =
            <div>
                <div>
                    Address: <input onChange={this.handleChange} name="address" value={this.state.info.address} />
                </div>
                <div>
                    Zip:<input onChange={this.handleChange} name="zip" value={this.state.info.zip} />
                </div>
                <div><button onClick={this.promptToThirdForm}>Next</button></div>
            </div>
        const page3 =
            <div>
                <div>
                    City: <input onChange={this.handleChange} name="city" value={this.state.info.city} />
                </div>
                <div>
                    State:<input onChange={this.handleChange} name="state" value={this.state.info.state} />
                </div>

                <div>
                    Country:<input onChange={this.handleChange} name="country" value={this.state.info.country} />
                </div>
                <div><button onClick={this.promptToFourthForm}>Next</button></div>
            </div>
        const page4 =
            <div>
                <div><h2>Please Verify Your Info</h2></div>
                <div>Email: {this.state.info.email}</div>
                <div>Address: {this.state.info.address}</div>
                <div>City: {this.state.info.city}</div>
                <div>State: {this.state.info.state}</div>
                <div>Zip: {this.state.info.zip}</div>
                <div>Country: {this.state.info.country}</div>
            </div>
        const confirmation =
            <div>
                Confirmation Page
            </div>

        if (this.state.redirectToInfoHome) {
            return <Redirect to={`/Users/Home`} />
        }
        const postView =
            this.state.togglePage2 ? page2
                : this.state.togglePage3 ? page3
                    : this.state.togglePage4 ? page4
                        : page1

        return (
            <div>
                This is what will be around the page
                {postView}
            </div>
        );
        return (
            <div>
            </div>
        );
    }
}

export default UserCreate;