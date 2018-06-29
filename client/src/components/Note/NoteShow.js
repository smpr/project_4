import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import { Container, FormContainer, BodyContainer, LinkDiv, Style } from "../StyledComponents/DefaultStyle"
import RaisedButton from 'material-ui/RaisedButton';
class NoteShow extends Component {
    state = {
        note: {}
    }
    async componentWillMount() {
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
    render() {
        return (
            <BodyContainer>
                <Container>
                    <FormContainer>
                        <div>
                            <h2>
                                {this.state.note.name}
                            </h2>
                        </div> 
                        <div>
                            <b>Helpful Link:</b><a href={this.state.note.link}>{this.state.note.link}</a>
                        </div>
                        <div>
                            {this.state.note.body}
                        </div>
                        <div>
                            <Link to={`/Categories/${this.props.match.params.categoryId}/notes/${this.props.match.params.noteId}/edit`}><RaisedButton label="Edit" style={Style} /></Link>
                            <RaisedButton href={`/Categories/${this.props.match.params.categoryId}/WalkThroughs`} label="Back" style={Style} />
                        </div>
                    </FormContainer>

                </Container>
            </BodyContainer>
        );
    }
}

export default NoteShow;