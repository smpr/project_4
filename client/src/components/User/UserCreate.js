import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { Container, FormContainer, BodyContainer, Style, TextLabelStyle } from "../StyledComponents/DefaultStyle"
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
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
        togglePage5: false,
        togglePage6: false,
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
        await axios.post(`/api/infos`, this.state.info)
        this.setState({ togglePage4: false, togglePage6: true })
        console.log("submit hit")
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
        if (!localStorage['access-token']) {
            return <Redirect to='/' />
        }
        const page1 =
            <BodyContainer>
                <Container>
                    <FormContainer>
                        <div>
                            <h2><b>Create User</b></h2>
                        </div>
                        <div>
                            <TextField
                                hintText="Email"
                                floatingLabelText="Email"
                                floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                                name="email"
                                type="text"
                                required
                                value={this.state.info.email}
                            />
                        </div>
                        <div>
                            <TextField
                                hintText="Password"
                                floatingLabelText="Password"
                                floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                                name="password"
                                type="password"
                                required
                                value={this.state.info.password}
                            />
                        </div>
                        <div>
                            <TextField
                                hintText="Confirm Password"
                                floatingLabelText="Confirm Password"
                                floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                                name="password_confirmation"
                                type="password"
                                required
                                value={this.state.info.password_confirmation}
                            />
                        </div>
                        <div>
                            <RaisedButton onClick={this.signUp} label="Next" style={Style} />
                        </div>
                    </FormContainer>
                </Container>
            </BodyContainer>
        const page2 =
            <BodyContainer>
                <Container>
                    <FormContainer>
                        <div>
                            <TextField
                                hintText="Address"
                                floatingLabelText="Address"
                                floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                                name="address"
                                type="text"
                                required
                                value={this.state.info.address}
                            />
                        </div>
                        <div>
                            <TextField
                                hintText="Zip"
                                floatingLabelText="Zip"
                                floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                                name="zip"
                                type="number"
                                required
                                value={this.state.info.zip}
                            />
                        </div>
                        <div>
                            <RaisedButton onClick={this.promptToThirdForm} label="Next" style={Style} />
                        </div>
                    </FormContainer>
                </Container>
            </BodyContainer>
        const page3 =
            <BodyContainer>
                <Container>
                    <FormContainer>
                        <div>
                            <TextField
                                hintText="City"
                                floatingLabelText="City"
                                floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                                name="city"
                                type="text"
                                required
                                value={this.state.info.city}
                            />
                        </div>
                        <div>
                            <TextField
                                hintText="State"
                                floatingLabelText="State"
                                floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                                name="state"
                                type="text"
                                required
                                value={this.state.info.state}
                            />
                        </div>
                        <div>
                            <TextField
                                hintText="Country"
                                floatingLabelText="Country"
                                floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                                name="country"
                                type="text"
                                required
                                value={this.state.info.country}
                            />
                        </div>
                        <div>
                            <RaisedButton onClick={this.promptToFourthForm} label="Next" style={Style} />
                        </div>
                    </FormContainer>
                </Container>
            </BodyContainer>
        const page4 =
            <BodyContainer>
                <Container>
                    <FormContainer>
                        <div>
                            <h2>Please Verify Your Info</h2>
                        </div>
                        <div>
                            Email: {this.state.info.email}
                        </div>
                        <div>
                            Address: {this.state.info.address}
                        </div>
                        <div>
                            City: {this.state.info.city}
                        </div>
                        <div>
                            State: {this.state.info.state}
                        </div>
                        <div>
                            Zip: {this.state.info.zip}
                        </div>
                        <div>
                            Country: {this.state.info.country}
                        </div>
                        <div>
                            <RaisedButton onClick={this.handleSubmit} label="Submit" style={Style} />
                        </div>
                    </FormContainer>
                </Container>
            </BodyContainer>
        const moveAlong =
            <Redirect to={`/Categories`} />
        if (this.state.redirectToInfoHome) {
            return <Redirect to={`/Users/Home`} />
        }
        const userView =
            this.state.togglePage2 ? page2
                : this.state.togglePage3 ? page3
                    : this.state.togglePage4 ? page4
                        : this.state.togglePage6 ? moveAlong
                            : page1
        return (
            <div>
                {userView}
            </div>
        );
    }
}

export default UserCreate;