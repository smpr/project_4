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
        return (
            <Container>
                <div>
                    <div><b>{this.state.info.name}</b></div>
                    <div><b>Description:</b> {this.state.info.body}</div>
                    <div><a href={this.state.info.links}>{this.state.info.links}</a></div>
                </div>
                <div>
                    <div><Link to={`/Categories/${this.props.match.params.categoryId}/WalkThroughs/${this.props.match.params.walkthroughId}/steps/create`}>Add a Step</Link></div>
                    <ol>{this.state.steps.map((step, index) => {
                    return (
                        <li><Link key={step._id} to={`/Categories/${this.props.match.params.categoryId}/WalkThroughs/${this.props.match.params.walkthroughId}/steps/${step.id}/show`}>{step.title}
                        </Link></li>
                    
                    )
                })} </ol>
                </div>
               
            </Container>
        );
    }
}

export default StepHome;