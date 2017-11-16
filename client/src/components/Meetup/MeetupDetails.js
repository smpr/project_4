import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const BodyContainer = styled.div`
display:flex;
justify-content: space-around;
background-color: #323232;
height: 100%;
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

class componentName extends Component {
    state = {
        meetup:{},
        redirectToUserHome: false
    }
    async componentWillMount() {
        try {
            const meetId = this.props.match.params.meetId
            const meetup = await axios.get(`/api/meetups/${meetId}`)
            this.setState({ meetup: meetup.data })
            console.log(this.state.meetup)
        } catch (error) {
            console.log(error)
        }

    }
    deleteMeetup = async () => {
        const meetId = this.props.match.params.meetId
    const res = await axios.delete(`/api/meetups/${meetId}`)
    //redirect back to the user page after the id has been deleted
    this.setState({ redirectToUserHome: true })

    }
    render() {
        if (this.state.redirectToUserHome) {
            return <Redirect to={`/Users/Home`} />
          }
        return (
            <BodyContainer>
                <FormContainer>
                <div><Link to='/Users/Home'><button>Back To User</button></Link></div>
                <div><h2>Group:</h2> {this.state.meetup.name}</div>
                <div><h3>City: </h3> {this.state.meetup.city}</div>
                <div><h3>Description: </h3> {this.state.meetup.description}</div>
                <div><h3>Website: </h3><a href={this.state.meetup.link}><button>Website</button></a></div>
                <div><Link to='/Users/Home'><button>Back To User</button></Link></div>
                <div><button onClick={this.deleteMeetup}>Delete Meetup</button></div>
                </FormContainer>
            </BodyContainer>
        );
    }
}

export default componentName;