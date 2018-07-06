import React, { Component } from 'react';
import { Container, FormContainer, BodyContainer, Style, TextLabelStyle } from "../StyledComponents/DefaultStyle"
import axios from 'axios'
import { Redirect } from 'react-router-dom'

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
class NoteCreate extends Component {
    state = {
        note: {
            name: "",
            body: "",
            link: ""
        },
        redirectBack: false
    }
    handleChange = (event) => {
        const updateNote = {
            ...this.state.note
        }
        updateNote[event.target.name] = event.target.value
        this.setState({ note: updateNote })
    }
    handleSubmit = async (event) => {
        event.preventDefault()
        const catId = this.props.match.params.categoryId
        await axios.post(`/api/categories/${catId}/notes`, { 'note': this.state.note })
        this.setState({ redirectBack: true })
    }
    render() {
        if (this.state.redirectBack) {
            return <Redirect to={`/categories/${this.props.match.params.categoryId}/walkthroughs`} />
        } else if (!localStorage['access-token']) {
            return <Redirect to='/' />
        }
        return (
            <BodyContainer>
                <Container>
                    <form>
                        <FormContainer>
                            <div>
                                <div>
                                    <h2>New Note</h2>
                                </div>
                                <div>
                                    <TextField
                                        hintText="Note Name"
                                        floatingLabelText="Note Name"
                                        floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                        floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                        onChange={this.handleChange}
                                        name="name"
                                        type="text"
                                        value={this.state.note.name}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        hintText="Note"
                                        floatingLabelText="Note"
                                        floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                        floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                        onChange={this.handleChange}
                                        name="body"
                                        type="text"
                                        required
                                        value={this.state.note.body}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        hintText="Helpful Link"
                                        floatingLabelText="Helpful Link"
                                        floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                        floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                        onChange={this.handleChange}
                                        name="link"
                                        type="text"
                                        required
                                        value={this.state.note.link}
                                    />
                                </div>
                                <div>
                                    <RaisedButton onClick={this.handleSubmit} label="Submit" style={Style} />
                                </div>
                            </div>
                        </FormContainer>
                    </form>
                </Container>
            </BodyContainer>
        );
    }
}

export default NoteCreate;