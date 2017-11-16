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
class StepHome extends Component {
    state = {
        info: [],
        steps: [],
        meetups: [],
        category: {}
    }
    async componentWillMount() {
        try {
            
            const catId = this.props.match.params.categoryId
            const walkId = this.props.match.params.walkthroughId
            const category = await axios.get(`/api/categories/${catId}`)
            this.setState({ category: category.data })
            const info = await axios.get(`/api/categories/${catId}/walkthroughs/${walkId}`)
            this.setState({info: info.data})
            const steps = await axios.get(`/api/categories/${catId}/walkthroughs/${walkId}/steps`)
            this.setState({steps: steps.data})
            

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
                            <Link to={`/Categories/${this.props.match.params.categoryId}/WalkThroughs/${this.props.match.params.walkthroughId}/edit`}><button>Edit</button></Link>
                            <Link to={`/Categories/${this.props.match.params.categoryId}/WalkThroughs`}><button>Back</button></Link>
                        </div>
                    </FormContainer>
                   
                </Container>
                <Container>
                    <FormContainer>
                        
                        <ol>
                            <div>
                            <h2>Steps:</h2>
                            <div>
                                <Link to={`/Categories/${this.props.match.params.categoryId}/WalkThroughs/${this.props.match.params.walkthroughId}/steps/create`}><button>Add a Step</button></Link>
                            </div>
                            {this.state.steps.map((step, index) => {
                            return (
                                <li><Link key={step._id} to={`/Categories/${this.props.match.params.categoryId}/WalkThroughs/${this.props.match.params.walkthroughId}/steps/${step.id}/show`}>{step.title}
                                </Link></li>

                            )
                        })} 
                        </div>
                        </ol>
                    </FormContainer>
                </Container>

            </BodyContainer>
        );
    }
}

export default StepHome;