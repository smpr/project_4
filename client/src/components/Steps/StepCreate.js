import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

const BodyContainer = styled.div`
display:flex;
justify-content: space-around;
background-color: #323232;
align-content: center;
height: 100vh;
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
        const res = await axios.post(`/api/categories/${catId}/walkthroughs/${walkId}/steps`, { 'step': this.state.step })

        this.setState({ redirectToWalkthroughs: true })

    }
    render() {
        if (this.state.redirectToWalkthroughs) {
            return <Redirect to={`/categories/${this.props.match.params.categoryId}/walkthroughs/${this.props.match.params.walkthroughId}/steps`} />
        }
        return (
            <BodyContainer>


                <form onSubmit={this.handleSubmit}>
                    <FormContainer>
                        <div><h2>New Step</h2></div>
                        <div>
                            <input
                                placeholder='Title'
                                onChange={this.handleChange}
                                name="title"
                                type="text"
                                required

                                value={this.state.step.title} />
                        </div>
                        <div>
                            <input
                                placeholder='Description'
                                onChange={this.handleChange}
                                name="body"
                                type="text"


                                value={this.state.step.body} />
                        </div>
                        <div>
                            <input
                                placeholder='Helpful Links'
                                onChange={this.handleChange}
                                name="links"
                                type="text"


                                value={this.state.step.links} />
                        </div>
                        <div>
                            <button>Create Step</button>
                        </div>
                    </FormContainer>
                </form>


            </BodyContainer>
        );
    }
}

export default StepCreate;