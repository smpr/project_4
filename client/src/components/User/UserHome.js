import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import sample from './samplemap.png'

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
const ImgContainer = styled.div`
img {
width: 25vw;
}
`
const Button = styled.button`
color: red;
`
class UserHome extends Component {
    state = {
        info: {
            city: "",
            state: "",
            address: "",
            country: "",
            zip: "",
        },
        meetups: []
    }
    async componentWillMount() {
        try {
            const info = await axios.get('/api/infos')
            const meetups = await axios.get('/api/meetups')
            this.setState({ info: info.data, meetups: meetups.data })
        } catch (error) {
            console.log(error)
        }

    }
       //run a function that will sort by date then delete the ones that have passed already based on todays time date. only delete the day after
//grab the date of the event + 1 day

//grab todays date

//Check to see if todays date matches event day +1

//if it is past day 

//delete the meetup

//if its not past yet

//display it in a new state

//save the update to the object

    render() {

        return (
            <BodyContainer>
                <FormContainer>
                    <div>
                        <h2>User Info</h2>
                        Street: {this.state.info.address}<br />
                        City: {this.state.info.city}<br />
                        State: {this.state.info.state}<br />
                        Country: {this.state.info.country}<br />
                        Zip: {this.state.info.zip}<br />
                    
                    <div><Link to='/Users/edit'><button>Edit</button></Link></div>
                    </div>
                </FormContainer>
                <FormContainer>
                    <div>
                    <div><h2>Meetups:</h2></div>
                {this.state.meetups.map((meetup, index) => {
                            return (
                                <div><Link key={meetup._id} to={`/Users/Meetups/${meetup.id}/MeetupDetails`}><b>{meetup.name}</b>
                                </Link></div>

                            )
                        })}
                        </div>
                        <ImgContainer>
                           <img src={sample} />
                            </ImgContainer>
                    </FormContainer>
            </BodyContainer>
        );
    }
}

export default UserHome;