import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
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
class UserHome extends Component {
    state = {
        info: {
            city: "",
            state: "",
            address: "",
            country: "",
            zip: "",
        }
    }
    async componentWillMount() {
        try {
            const res = await axios.get('/api/infos')
            console.log(res.data)
            this.setState({ info: res.data })
            console.log(this.state.infos)
        } catch (error) {
            console.log(error)
        }

    }
    render() {

        return (
            <BodyContainer>
                <FormContainer>
                    <div>
                        <h2>User Info</h2>
                        First Name:<br />
                        Last Name:<br />
                        Street: {this.state.info.address}<br />
                        City: {this.state.info.city}<br />
                        State: {this.state.info.state}<br />
                        Country: {this.state.info.country}<br />
                        Zip: {this.state.info.zip}<br />
                    </div>
                    <div><Link to='/Users/edit'><button>Edit</button></Link></div>
                </FormContainer>
            </BodyContainer>
        );
    }
}

export default UserHome;