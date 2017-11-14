import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const BodyContainer = styled.div`
display:flex;
justify-content: space-around;
background-color: #323232;
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
height: 50vh;
width: 25vw;
color: white;
background-color: #4B4B4B;

`

const Button = styled.button`
color: red;
`
class StepHome extends Component {
    state = {
        info: [],
        steps: []
    }
    async componentWillMount() {
        try {
            const catId = this.props.match.params.categoryId
            const walkId = this.props.match.params.walkthroughId
            const info = await axios.get(`/api/categories/${catId}/walkthroughs/${walkId}`)
            const steps = await axios.get(`/api/categories/${catId}/walkthroughs/${walkId}/steps`)
            console.log(steps.data)
            this.setState({ info: info.data, steps: steps.data })

        } catch (error) {
            console.log(error)
        }

    }

    render() {
        if (this.props.signedIn) {
            return <Redirect to={`/signup`} />
        }
        return (
            <BodyContainer>
                <Container>
                    <FormContainer>
                        <div><b>{this.state.info.name}</b></div>
                        <div><b>Description:</b> {this.state.info.body}</div>
                        <div><b>Helpful Links:</b><a href={this.state.info.links}>{this.state.info.links}</a></div>
                        <div><Link to={`/Categories/${this.props.match.params.categoryId}/WalkThroughs/${this.props.match.params.walkthroughId}/edit`}><button>Edit</button></Link></div>
                    </FormContainer>
                    <FormContainer>
                        <div>Meetup Place holder</div>
                    </FormContainer>
                </Container>
                <Container>
                    <FormContainer>
                        <div><Link to={`/Categories/${this.props.match.params.categoryId}/WalkThroughs/${this.props.match.params.walkthroughId}/steps/create`}>Add a Step</Link></div>
                        <ol><b><h2>Steps:</h2></b>{this.state.steps.map((step, index) => {
                            return (
                                <li><Link key={step._id} to={`/Categories/${this.props.match.params.categoryId}/WalkThroughs/${this.props.match.params.walkthroughId}/steps/${step.id}/show`}>{step.title}
                                </Link></li>

                            )
                        })} </ol>
                    </FormContainer>
                </Container>

            </BodyContainer>
        );
    }
}

export default StepHome;