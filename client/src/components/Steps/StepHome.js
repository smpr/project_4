import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import {Container, FormContainer, BodyContainer, Style} from "../StyledComponents/DefaultStyle"
import RaisedButton from 'material-ui/RaisedButton';

class StepHome extends Component {
    state = {
        info: [],
        steps: [{
            title: '',
            body: ''

        }],
        meetups: [],
        category: {}
    }
    async componentWillMount() {
        try {
            
            const catId = this.props.match.params.categoryId
            const walkId = this.props.match.params.walkthroughId
            const category = await axios.get(`/api/categories/${catId}`)
            //this.setState({ category: category.data })
            const info = await axios.get(`/api/categories/${catId}/walkthroughs/${walkId}`)
            const steps = await axios.get(`/api/categories/${catId}/walkthroughs/${walkId}/steps`)
            this.setState({info: info.data, category: category.data, steps: steps.data})
            

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
                        <div><h2>{this.state.info.name}</h2></div>
                        <div><b>Description:</b> {this.state.info.body}</div>
                        
                        <div>
                            <RaisedButton href={`/Categories/${this.props.match.params.categoryId}/WalkThroughs/${this.props.match.params.walkthroughId}/edit`}label="Edit" style={Style} />
                            <RaisedButton href={`/Categories/${this.props.match.params.categoryId}/WalkThroughs`} label="Back" style={Style} />
                        </div>
                    </FormContainer>
                   
                </Container>
                <Container>
                    <FormContainer>
                        <div>
                        <ol>
                            <div>
                            <h2>Steps:</h2>
                            </div>
                            <div>
                                <RaisedButton href={`/Categories/${this.props.match.params.categoryId}/WalkThroughs/${this.props.match.params.walkthroughId}/steps/create`} label="New Step" style={Style} />
                            </div>
                            {this.state.steps.map((step, index) => {
                            return (
                                <li><Link key={step._id} to={`/Categories/${this.props.match.params.categoryId}/WalkThroughs/${this.props.match.params.walkthroughId}/steps/${step.id}/show`}>{step.title}
                                </Link></li>

                            )
                        })} 
                     
                        </ol>
                        </div>
                    </FormContainer>
                </Container>

            </BodyContainer>
        );
    }
}

export default StepHome;