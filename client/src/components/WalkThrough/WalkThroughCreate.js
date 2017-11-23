import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import {Container, FormContainer, BodyContainer, Style} from "../StyledComponents/DefaultStyle"
import RaisedButton from 'material-ui/RaisedButton';

class WalkThroughCreate extends Component {
    state = {
        walkthrough: {
            name: "",
            body: "",
            links: ""
        },
        redirectToHome: false,
        walkId: ""
    }


    handleChange = (event) => {
        const updateWalkthrough = {
            ...this.state.walkthrough
        }
        updateWalkthrough[event.target.name] = event.target.value

        this.setState({ walkthrough: updateWalkthrough })
    }
    // this handles the submit function specifically setup on the back end to allow this route directly
    handleSubmit = async (event) => {
        event.preventDefault()
        const catId = this.props.match.params.categoryId

        const res = await axios.post(`/api/categories/${catId}/walkthroughs`, { 'walkthrough': this.state.walkthrough })

        this.setState({ redirectToHome: true })

    }
    render() {
        if (this.state.redirectToHome) {
            return <Redirect to={`/categories/${this.props.match.params.categoryId}/walkthroughs`} />
        }
        return (
            <BodyContainer>
                <Container>
                <form>
                    <FormContainer>
                        <div>
                        <div>
                            <h2>New Walkthrough</h2>
                        </div>
                        <div>
                            <input
                                placeholder='Category Name'
                                onChange={this.handleChange}
                                name="name"
                                type="text"
                                required

                                value={this.state.walkthrough.name} />
                        </div>
                        <div>
                            <input
                                placeholder='Description'
                                onChange={this.handleChange}
                                name="body"
                                type="text"


                                value={this.state.walkthrough.body} />
                        </div>

                        <div>
                        <RaisedButton  onClick={this.handleSubmit}label="Submit" style={Style} />
                        </div>
                        </div>
                    </FormContainer>
                </form>
                </Container>
            </BodyContainer>
        );
    }
}

export default WalkThroughCreate;