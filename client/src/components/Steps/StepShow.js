import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const BodyContainer = styled.div`
display:flex;
justify-content: space-around;
`
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-content: center;
`
const StepInfo = styled.div`
width: 300px;
height: 300px;
background-color: red;
`
const StepList = styled.div`
`
const StepDescription = styled.div`
width: 300px;
height: 300px;
background-color: blue;
`
class StepShow extends Component {
    state = {
        step: {}
    }
    async componentWillMount() {
        try {
            const catId = this.props.match.params.categoryId
            const walkId = this.props.match.params.walkthroughId
            const stepId = this.props.match.params.stepId
            const steps = await axios.get(`/api/categories/${catId}/walkthroughs/${walkId}/steps/${stepId}`)
            console.log(steps.data)
            this.setState({ step: steps.data })

        } catch (error) {
            console.log(error)
        }

    }
    render() {
        return (
            <BodyContainer>
                <Container>
                
                    <StepInfo><b>Step:</b>{this.state.step.title}</StepInfo>
                    <div><b>Helpful Links:</b><a href={this.state.step.links}>{this.state.step.links}</a></div>
                    <div><Link to={`/Categories/${this.props.match.params.categoryId}/WalkThroughs/${this.props.match.params.walkthroughId}/steps/${this.props.match.params.stepId}/edit`}><button>Edit</button></Link>
                    <Link to={`/Categories/${this.props.match.params.categoryId}/WalkThroughs/${this.props.match.params.walkthroughId}/steps`}><button>Back</button></Link></div>
                    </Container>
                    <Container>
                    <StepDescription><b>Description:</b>{this.state.step.body}</StepDescription>
                    
                </Container>
            </BodyContainer>
        );
    }
}

export default StepShow;