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
            city: "",
            state: "",
            address: "",
            country: "",
            zip: "",
        },
        redirectToInfoHome: false
    }
    componentDidMount() {
        fetch()
            .then()
    } async componentWillMount() {
        try {
            const res = await axios.get('/api/infos')
            this.setState({ info: res.data })
            console.log(this.state.info)
        } catch (error) {
            console.log(error)
        }

    }
    editInfo = async () => {

        const res = await axios.patch(`/api/infos`, {
            info: this.state.info,


        })
        this.setState({ info: res.data, redirectToInfoHome: true })

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
    render() {
        if (this.state.redirectToInfoHome) {
            return <Redirect to={`/Users/Home`} />
        }
        return (
            <BodyContainer>
                <FormContainer>
                    <div>
                        <h2><b>Edit User</b></h2>
                    </div>
                    <div>
                        Address: <input onChange={this.handleChange} name="address" value={this.state.info.address} />
                    </div>
                    <div>
                        City: <input onChange={this.handleChange} name="city" value={this.state.info.city} />
                    </div>
                    <div>
                        State:<input onChange={this.handleChange} name="state" value={this.state.info.state} />
                    </div>
                    <div>
                        Zip:<input onChange={this.handleChange} name="zip" value={this.state.info.zip} />
                    </div>
                    <div>
                        Country:<input onChange={this.handleChange} name="country" value={this.state.info.country} />
                    </div>
                    <button onClick={this.handleSubmit}>Create</button>
                </FormContainer>
            </BodyContainer>
        );
    }
}

export default UserCreate;