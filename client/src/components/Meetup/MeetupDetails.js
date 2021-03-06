import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import sample from '../User/samplemap.png'
import { Container, FormContainer, BodyContainer, Style } from "../StyledComponents/DefaultStyle"
import RaisedButton from 'material-ui/RaisedButton';


class componentName extends Component {
    state = {
        meetup: {},
        redirectToUserHome: false,
        mapsInfo: [{
            name: [],
            lon: [],
            lat: []
        }]
    }
    // grabs all meetup id that the user clicked save that was then saved to the meetup model
    // also sets a new state so that the map will be able to make drop pins on the map 
    async componentDidMount() {
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
    //allows user to delete this meetup
    deleteMeetup = async () => {
        const meetId = this.props.match.params.meetId
        await axios.delete(`/api/meetups/${meetId}`)
        //redirect back to the user page after the id has been deleted
        this.setState({ redirectToUserHome: true })
    }
    render() {
        if (this.state.redirectToUserHome) {
            return <Redirect to={`/Users/Home`} />
        } else if (!localStorage['access-token']) {
            return <Redirect to='/' />
        }
        return (
            <BodyContainer>
                <Container>
                    <FormContainer>
                        <div>
                            <div><h2>Group:</h2> {this.state.meetup.name}</div>
                            <div><h3>City: </h3> {this.state.meetup.city}</div>
                            <div><h3>Description: </h3> {this.state.meetup.description}</div>
                            <div><h3>Website: </h3><a href={this.state.meetup.link}>{this.state.meetup.link}</a></div>
                            <div><Link to='/Users/Home'>
                                <RaisedButton label="Back" style={Style} /></Link>
                                <RaisedButton onClick={this.deleteMeetup} label="Delete" style={Style} />
                            </div>
                        </div>
                    </FormContainer>
                </Container>
                <Container>
                    <FormContainer>
                        <img src={sample} alt="sample" />
                        {/* <iframe src="//www.google.com/maps/embed/v1/place?q=Empire%20State%20Building
                            &zoom=13
                            &attribution_source=Google+Maps+Embed+API
                            &attribution_web_url=https://developers.google.com/maps/documentation/embed/
                            &key=AIzaSyBs7QCycmCzKwvri5ZotdhCpGihXosxp2Q" allowfullscreen>
                        </iframe> */}
                    </FormContainer>
                </Container>
            </BodyContainer >
        );
    }
}

export default componentName;