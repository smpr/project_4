import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import {Container, FormContainer, BodyContainer, Style, TextLabelStyle} from "../StyledComponents/DefaultStyle"
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class StepCreate extends Component {
    state = {
        step: {},
        redirectToWalkthroughs: false
    }
    handleChange = (event) => {
        const updateStep = {
            ...this.state.step
        }
        updateStep[event.target.name] = event.target.value

        this.setState({ step: updateStep })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const catId = this.props.match.params.categoryId
        const walkId = this.props.match.params.walkthroughId
        await axios.post(`/api/categories/${catId}/walkthroughs/${walkId}/steps`, { 'step': this.state.step })

        this.setState({ redirectToWalkthroughs: true })

    }
    render() {
        if (this.state.redirectToWalkthroughs) {
            return <Redirect to={`/categories/${this.props.match.params.categoryId}/walkthroughs/${this.props.match.params.walkthroughId}/steps`} />
        }else if (!localStorage['access-token']) {
            return <Redirect to='/' />
        }
        return (
            <BodyContainer>
                <Container>

                <form>
                    <FormContainer>
                        <div><h2>New Step</h2></div>
                        <div>
                            <TextField
                                    hintText="Step Name"
                                    floatingLabelText="Step Name"
                                    floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                    floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                    onChange={this.handleChange}
                                    name="title"
                                    type="text"
                                    required

                                    value={this.state.step.title}
                                    />                    
                        </div>
                        <div>
                        <TextField
                                    hintText="Step Description"
                                    floatingLabelText="Step Description"
                                    floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                    floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                    onChange={this.handleChange}
                                    name="body"
                                    type="text"
                                    required

                                    value={this.state.step.body}
                                    />

                        </div>

                        <div>
                        <RaisedButton  onClick={this.handleSubmit} label="Submit" style={Style} />
                        </div>
                    </FormContainer>
                </form>

                </Container>
            </BodyContainer>
        );
    }
}

export default StepCreate;