import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { Container, FormContainer, BodyContainer, Style, TextLabelStyle } from "../StyledComponents/DefaultStyle"
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class StepEdit extends Component {
    state = {
        step: {
            title: '',
            body: '',
            links: ''
        },
        redirectToSteps: false,
        redirectToWalkthrough: false,
    }
    async componentWillMount() {
        try {
            const catId = this.props.match.params.categoryId
            const walkId = this.props.match.params.walkthroughId
            const stepId = this.props.match.params.stepId
            const step = await axios.get(`/api/categories/${catId}/walkthroughs/${walkId}/steps/${stepId}`)
            console.log(stepId)
            this.setState({ step: step.data })

        } catch (error) {
            console.log(error)
        }

    }
    editStep = async () => {
        const catId = this.props.match.params.categoryId
        const walkId = this.props.match.params.walkthroughId
        const stepId = this.props.match.params.stepId
        const res = await axios.patch(`/api/categories/${catId}/walkthroughs/${walkId}/steps/${stepId}`, {
            step: this.state.step,


        })
        this.setState({ step: res.data, redirectToSteps: true })

    }
    handleChange = (event) => {
        const attribute = event.target.name
        const clonedStep = { ...this.state.step }
        clonedStep[attribute] = event.target.value
        this.setState({ step: clonedStep })
    }
    deleteStep = async () => {
        const catId = this.props.match.params.categoryId
        const walkId = this.props.match.params.walkthroughId
        const stepId = this.props.match.params.stepId
        await axios.delete(`/api/categories/${catId}/walkthroughs/${walkId}/steps/${stepId}`)
        //redirect back to the user page after the id has been deleted
        this.setState({ redirectToWalkthrough: true })

    }
    render() {
        if (this.state.redirectToSteps) {
            return <Redirect to={`/Categories/${this.props.match.params.categoryId}/WalkThroughs/${this.props.match.params.walkthroughId}/steps/${this.props.match.params.stepId}/show`} />
        }
        else if (this.state.redirectToWalkthrough) {
            return <Redirect to={`/Categories/${this.props.match.params.categoryId}/WalkThroughs/${this.props.match.params.walkthroughId}/steps`} />
        }
        return (
            <BodyContainer>
                <Container>
                    <FormContainer>
                        <div>
                            <br />
                            <h2><b>Edit Step</b></h2>
                            <br />
                            <TextField
                                hintText="Title"
                                floatingLabelText="Step Name"
                                floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                                name="title"
                                type="text"


                                value={this.state.step.title}
                            />

                            <div>
                                <TextField
                                    hintText="Description"
                                    floatingLabelText="Step Description"
                                    floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                    floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                    onChange={this.handleChange}
                                    name="body"
                                    type="text"


                                    value={this.state.step.body}
                                />
                            </div>

                            <RaisedButton onClick={this.deleteStep} label="Delete" style={Style} />
                            <RaisedButton onClick={this.editStep} label="Edit" style={Style} />
                        </div>
                    </FormContainer>
                </Container>
            </BodyContainer>
        );
    }
}

export default StepEdit;