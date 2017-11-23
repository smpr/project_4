import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import {Container, FormContainer, BodyContainer, Button, LinkDiv, Style} from "../StyledComponents/DefaultStyle"
import RaisedButton from 'material-ui/RaisedButton';
class WalkThroughHome extends Component {
    state = {
        walkthroughs: [],
        meetups: [],
        meetup: {
            name:""
        }
    }
    async componentWillMount() {
        try {
            const catId = this.props.match.params.categoryId
            const category = await axios.get(`/api/categories/${catId}`)
            this.setState({ category: category.data })
            const res = await axios.get(`/api/categories/${catId}/walkthroughs`)
            const searcher = this.state.category.title
            const meetups = await axios.get(`/api/meetupapi/${searcher}`)

            console.log(meetups.data)
            this.setState({ meetups: meetups.data, walkthroughs: res.data })

        } catch (error) {
            console.log(error)
        }

    }

    async handleSubmit(index) {
        try{
         const id = index
         const meetup = this.state.meetups[id]
        this.setState({ meetup: meetup})
        const res = await axios.post(`/api/meetups`, { meetup: this.state.meetup })
        } catch (error){
            console.log(error)
        }
    }
    
    render() {
        return (
            <BodyContainer>
                <Container>
                <FormContainer>
                    <div>
                    <div><h2>Walkthroughs:</h2>
                    <Link to={`/Categories/${this.props.match.params.categoryId}/WalkThroughs/Create`}><RaisedButton label="New Walkthrough" style={Style} /></Link>
                    </div>
                    <br/>
                    <div>
                        {this.state.walkthroughs.map((walkthrough, index) => {
                            return (
                                <div><Link key={walkthrough._id} to={`/Categories/${this.props.match.params.categoryId}/WalkThroughs/${walkthrough.id}/steps`}><b>{walkthrough.name}</b>
                                </Link></div>

                            )
                        })}
                    </div>
                    </div>
                </FormContainer>
                </Container>
                <Container>
                <FormContainer>
                    <div>
                        <div><h2>Meetups:</h2></div>
                        <div>{this.state.meetups.map((meetup, index) => {
                            return (
                                <LinkDiv><div><a href={meetup.link}>{meetup.name}</a></div><div><button value={index} onClick={() => this.handleSubmit(index)}>save</button></div></LinkDiv>
                            )
                        })}</div></div>

                </FormContainer>
                </Container>
            </BodyContainer>
        );
    }
}

export default WalkThroughHome;
