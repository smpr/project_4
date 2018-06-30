import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { Container, FormContainer, BodyContainer, Style, InnerForm, TextLabelStyle } from "../StyledComponents/DefaultStyle"
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class WalkthroughEdit extends Component {
    state = {
        walkthrough: {},
        redirectToWalkthrough: false
    }
    async componentDidMount() {
        try {
            const catId = this.props.match.params.categoryId
            const walkId = this.props.match.params.walkthroughId
            const res = await axios.get(`/api/categories/${catId}/walkthroughs/${walkId}`)
            console.log(res.data)
            this.setState({ walkthrough: res.data })

        } catch (error) {
            console.log(error)
        }
    }
    editWalk = async () => {
        const catId = this.props.match.params.categoryId
        const walkId = this.props.match.params.walkthroughId
        const res = await axios.patch(`/api/categories/${catId}/walkthroughs/${walkId}`, {
            walkthrough: this.state.walkthrough,


        })
        this.setState({ walkthrough: res.data, redirectToWalkthrough: true })

    }
    handleChange = (event) => {
        const attribute = event.target.name
        const clonedWalk = { ...this.state.walkthrough }
        clonedWalk[attribute] = event.target.value
        this.setState({ walkthrough: clonedWalk })
    }
    deleteWalk = async () => {
        const catId = this.props.match.params.categoryId
        const walkId = this.props.match.params.walkthroughId
        await axios.delete(`/api/categories/${catId}/walkthroughs/${walkId}`)
        //redirect back to the user page after the id has been deleted
        this.setState({ redirectToWalkthrough: true })

    }


    render() {
        if (this.state.redirectToWalkthrough) {
            return <Redirect to={`/Categories/${this.props.match.params.categoryId}/WalkThroughs`} />
        } else if (!localStorage['access-token']) {
            return <Redirect to='/' />
        }
        return (
            <BodyContainer>
                <Container>
                    <FormContainer>

                        <div>
                            <h2>Edit Walkthrough</h2>
                        </div>

                        <div>

                            <TextField
                                hintText="Category Name"
                                floatingLabelText="Walkthrough Title:"
                                floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                                name="name"
                                type="text"


                                value={this.state.walkthrough.name}
                            />

                        </div>
                        <div>
                            <TextField
                                hintText="Category Description"
                                floatingLabelText="Description:"
                                floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                                name="body"
                                type="text"


                                value={this.state.walkthrough.body}
                            />


                        </div>

                        <div>
                            <RaisedButton onClick={this.deleteWalk} label="Delete" style={Style} />
                            <RaisedButton onClick={this.editWalk} label="Edit" style={Style} />
                        </div>
                    </FormContainer>
                </Container>
            </BodyContainer>
        );
    }
}

export default WalkthroughEdit;