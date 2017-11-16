import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

const BodyContainer = styled.div`
display:flex;
justify-content: space-around;
background-color: #323232;
height: 100vh;
`
const LinkDiv = styled.div`
display:flex;
justify-content: space-between;
`
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-content: center;
`
const FormContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-content: center;
width: 25vw;
color: white;
background-color: #4B4B4B;
a {
    color: white;
    text-decoration: none;
}

`

const Button = styled.button`
color: red;
`

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
                <form onSubmit={this.handleSubmit}>
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
                            <button>Create Category</button>
                        </div>
                        </div>
                    </FormContainer>
                </form>
            </BodyContainer>
        );
    }
}

export default WalkThroughCreate;