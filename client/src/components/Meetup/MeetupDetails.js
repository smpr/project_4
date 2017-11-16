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
        redirectToUserHome: false,
        mapsInfo:[{
            name: [],
            lon: [],
            lat: []
    }]
    }
// grabs all meetup id that the user clicked save that was then saved to the meetup model
    async componentWillMount() {
        try {
            const meetId = this.props.match.params.meetId
            const meetup = await axios.get(`/api/meetups/${meetId}`)
            this.setState({ meetup: meetup.data })
            this.state.mapsInfo.name = this.state.meetup.name
            this.state.mapsInfo.lon = this.state.meetup.lon
            this.state.mapsInfo.lat = this.state.meetup.lat
           
            console.log(this.state.mapsInfo)
        } catch (error) {
            console.log(error)
        }

    }
    async getMapCords() { 
        try {
            //grab meetup name
        const meetName = this.state.meetup.name
       
        //grab meetup long
        const meetLong = this.state.meetup.lon
        //grab meetup lat

        const meetLat = this.state.meetup.lat
        //save into a new state as arrays
        this.setState({ mapsInfo: meetName})
        //display on google map
        //
        console
        console.log(meetName)
            } catch (error) {
            console.log(error)
                            }
        }
    //allows user to delete this meetup
    deleteMeetup = async () => {
        const meetId = this.props.match.params.meetId
    const res = await axios.delete(`/api/meetups/${meetId}`)
    //redirect back to the user page after the id has been deleted
    this.setState({ redirectToUserHome: true })

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
                <FormContainer>
                <iframe src="//www.google.com/maps/embed/v1/place?q=Empire%20State%20Building
      &zoom=13
      &attribution_source=Google+Maps+Embed+API
      &attribution_web_url=https://developers.google.com/maps/documentation/embed/
      &key=AIzaSyBs7QCycmCzKwvri5ZotdhCpGihXosxp2Q" allowfullscreen>
  </iframe>
                    </FormContainer>

            </BodyContainer>
        );
    }
}

export default componentName;