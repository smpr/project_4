import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import {Container, FormContainer, BodyContainer, Style, TextLabelStyle} from "../StyledComponents/DefaultStyle"
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class CatCreate extends Component {
    state = {
        category: [

        ],
        redirectToHome: false,
    }


    handleChange = (event) => {
        const updateCategory = {
            ...this.state.category
        }
        updateCategory[event.target.name] = event.target.value
        this.setState({ category: updateCategory })
    }
    // this handles the submit function specifically setup on the back end to allow this route directly
    handleSubmit = async (event) => {
        event.preventDefault()
        await axios.post(`/api/categories`, { category: this.state.category })
        this.setState({ redirectToHome: true })

    }
    render() {

        if (this.state.redirectToHome) {
            return <Redirect to="/categories" />
        }
        return (
            <BodyContainer>
                <Container>
                <form>
                    <FormContainer>
                        <div>
                        <div>
                            <h2>Create a Category:</h2>
                        </div>
                        <div>
                        <TextField
                                hintText="Category Name"
                                floatingLabelText="Category Name"
                                floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                                name="title"
                                type="text"
                                required

                                value={this.state.category.title}
                                />
        
                        </div>
                        <div>
                        <RaisedButton onClick={this.handleSubmit} label="Create Category" style={Style} />
                        </div>
                        </div>
                    </FormContainer>
                </form>
                </Container>
            </BodyContainer>
        );
    }
}

export default CatCreate;