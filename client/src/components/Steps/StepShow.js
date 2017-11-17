import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'
import {Container, FormContainer, BodyContainer, Button} from "../StyledComponents/DefaultStyle"

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
                
                    <FormContainer>
                        <div>
                            <h3>Step:</h3> {this.state.step.title}
                        </div>
                        <div>
                            <Link to={`/Categories/${this.props.match.params.categoryId}/WalkThroughs/${this.props.match.params.walkthroughId}/steps/${this.props.match.params.stepId}/edit`}><button>Edit</button></Link>
                            <Link to={`/Categories/${this.props.match.params.categoryId}/WalkThroughs/${this.props.match.params.walkthroughId}/steps`}><button>Back</button></Link>
                        </div>
                    </FormContainer>
                  
                </Container>
                <Container>
                    <FormContainer>
                        <div>
                            <h3>Description:</h3>{this.state.step.body}
                        </div>
                    </FormContainer>
                    
                </Container>
            </BodyContainer>
        );
    }
}

export default StepShow;