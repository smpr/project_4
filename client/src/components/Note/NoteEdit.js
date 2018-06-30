import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { Container, FormContainer, BodyContainer, Style, TextLabelStyle } from "../StyledComponents/DefaultStyle"
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
class NoteEdit extends Component {
    state = {
        note: {},
        redirectToWalkthrough: false
    }
    async componentDidMount() {
        try {
            const catId = this.props.match.params.categoryId
            const noteId = this.props.match.params.noteId
            const noteState = await axios.get(`/api/categories/${catId}/notes/${noteId}`)
            this.setState({ note: noteState.data })
            console.log(noteState.data)
        } catch (error) {
            console.log(error)
        }
    }
    editNote = async () => {
        const catId = this.props.match.params.categoryId
        const noteId = this.props.match.params.noteId

        const res = await axios.patch(`/api/categories/${catId}/notes/${noteId}`, {
            note: this.state.note,


        })
        this.setState({ step: res.data, redirectToSteps: true })

    }
    handleChange = (event) => {
        const attribute = event.target.name
        const clonedNote = { ...this.state.note }
        clonedNote[attribute] = event.target.value
        this.setState({ note: clonedNote })
    }
    deleteNote = async () => {
        const catId = this.props.match.params.categoryId
        const noteId = this.props.match.params.noteId

        await axios.delete(`/api/categories/${catId}/notes/${noteId}`)

        this.setState({ redirectToWalkthrough: true })

    }
    render() {
        if (this.state.redirectToWalkthrough) {
            return <Redirect to={`/Categories/${this.props.match.params.categoryId}/WalkThroughs`} />
        }

        return (
            <BodyContainer>
                <Container>
                <FormContainer>
                        <div>
                            <br />
                            <h2><b>Edit Note</b></h2>
                            <br />
                            <TextField
                                hintText="Name"
                                floatingLabelText="Name"
                                floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                                name="name"
                                type="text"


                                value={this.state.note.name}
                            />

                            <div>
                                <TextField
                                    hintText="Body"
                                    floatingLabelText="Description"
                                    floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                    floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                    onChange={this.handleChange}
                                    name="body"
                                    type="text"


                                    value={this.state.note.body}
                                />
                            </div>
                            <div>
                                <TextField
                                    hintText="Helpful Link"
                                    floatingLabelText="Link"
                                    floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                    floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                    onChange={this.handleChange}
                                    name="link"
                                    type="text"


                                    value={this.state.note.link}
                                />
                            </div>

                            <RaisedButton onClick={this.deleteNote} label="Delete" style={Style} />
                            <RaisedButton onClick={this.editNote} label="Edit" style={Style} />
                        </div>
                    </FormContainer>
                </Container>
            </BodyContainer>
        );
    }
}

export default NoteEdit;