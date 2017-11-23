import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import {Container, FormContainer, BodyContainer, Style} from "../StyledComponents/DefaultStyle"
import RaisedButton from 'material-ui/RaisedButton';

class UserEdit extends Component {
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
    async componentWillMount() {
        try {
            const res = await axios.get('/api/infos')
            console.log(res.data)
            this.setState({ info: res.data })
            console.log(this.state.info)
        } catch (error) {
            console.log(error)
        }

    }
    editInfo = async () => {

        const res = await axios.patch(`/api/infos/${this.state.info.id}`, {
            info: this.state.info


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
        await axios.post(`/api/infos`, { 'info': this.state.info })
        this.setState({ redirectToHome: true })

    }
    render() {
        if (this.state.redirectToInfoHome) {
            return <Redirect to={`/Users/Home`} />
        }
        return (
            <BodyContainer>
                <Container>
                    <FormContainer>
                        <h2>Edit User</h2>
                        
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
                        <div>
                            <RaisedButton onClick={this.editInfo} label="Edit" style={Style} />
                        </div>
                    </FormContainer>
                </Container>
            </BodyContainer >
        );
    }
}

export default UserEdit;