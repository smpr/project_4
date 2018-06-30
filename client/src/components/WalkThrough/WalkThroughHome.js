import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import { Container, FormContainer, BodyContainer, LinkDiv, Style } from "../StyledComponents/DefaultStyle"
import RaisedButton from 'material-ui/RaisedButton';
class WalkThroughHome extends Component {
    state = {
        walkthroughs: [],
        notes: [],
        meetups: [],
        meetup: {
            name: ""
        }
    }
    async componentDidMount() {
        try {
            const catId = this.props.match.params.categoryId
            const category = await axios.get(`/api/categories/${catId}`)
            this.setState({ category: category.data })
            const walks = await axios.get(`/api/categories/${catId}/walkthroughs`)
            const notes = await axios.get(`/api/categories/${catId}/notes`)
            const searcher = this.state.category.title
            const meetups = await axios.get(`/api/meetupapi/${searcher}`)

            console.log(meetups.data)
            this.setState({ meetups: meetups.data, walkthroughs: walks.data, notes: notes.data })

        } catch (error) {
            console.log(error)
        }

    }

    async handleSubmit(index) {
        try {
            const id = index
            const meetup = this.state.meetups[id]
            this.setState({ meetup: meetup })
            await axios.post(`/api/meetups`, { meetup: this.state.meetup })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        if (!localStorage['access-token']) {
            return <Redirect to='/' />
        }
        return (
            <BodyContainer>
                <Container>
                    <FormContainer>
                        <div>
                            <div><h2>Walkthroughs:</h2>
                                <Link to={`/Categories/${this.props.match.params.categoryId}/WalkThroughs/Create`}><RaisedButton label="New Walkthrough" style={Style} /></Link>
                            </div>
                            <br />
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
                    <FormContainer>
                        <div>
                            <div>
                                <h2>Notes:</h2>
                            </div>
                            <div>
                            <Link to={`/Categories/${this.props.match.params.categoryId}/Notes/Create`}><RaisedButton label="Create Note" style={Style} /></Link>
                                {this.state.notes.map((note, index) =>{
                                return (
                                    <div>
                                        <Link key={note._id} to={`/Categories/${this.props.match.params.categoryId}/Notes/${note.id}/Show`}><b>{note.name}</b>
                                        </Link>
                                    </div>
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
                                    <LinkDiv><div><a href={meetup.link}>{meetup.name}</a></div><div><button value={index} onClick={() => this.handleSubmit(index)}>SAVE</button></div></LinkDiv>
                                )
                            })}</div></div>

                    </FormContainer>
                </Container>
            </BodyContainer>
        );
    }
}

export default WalkThroughHome;
