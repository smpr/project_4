import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
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
            <Container>
                <div>
                    <div><b>Step:</b>{this.state.step.title}</div>
                    <div><b>Description:</b>{this.state.step.body}</div>
                    <div><b>Helpful Links:</b><a href={this.state.step.links}>{this.state.step.links}</a></div>
                    <div><Link to={`/Categories/${this.props.match.params.categoryId}/WalkThroughs/${this.props.match.params.walkthroughId}/steps/${this.props.match.params.stepId}/edit`}><button>Edit</button></Link>
                    <Link to={`/Categories/${this.props.match.params.categoryId}/WalkThroughs/${this.props.match.params.walkthroughId}/steps`}><button>Back</button></Link></div>
                </div>
            </Container>
        );
    }
}

export default StepShow;