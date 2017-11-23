import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {Container, FormContainer, BodyContainer, Button, ListDiv} from "../StyledComponents/DefaultStyle"
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    // width: '10%',
    height: '95%',
    margin: '10px',
    border: '.5px solid #37474F',
    backgroundColor: '#37474F'
  };
class CatHome extends Component {
    state = {
        categories: [],
        meetups: []
    }
    //this finds and mounts all categories and meetups that relate to the category based on the title
    async componentWillMount() {
        try {
            const cat = await axios.get('/api/categories')
            const meetup = await axios.get('/api/meetupapi')
            this.setState({ categories: cat.data, meetups: meetup.data })
            console.log(this.state.meetups)
        } catch (error) {
            console.log(error)
        }

    }
    render() {
        return (
            <BodyContainer>
                <Container>
                    <FormContainer>
                        <ListDiv>
                            <div>
                                <div> 
                                    <h3>Please Select a Category</h3>
                                </div>
                                <div>
                                    <Link to="/categories/create"><RaisedButton label="New Category" style={style} /></Link>
                                </div>
                                <div>
                                <ul>
                                {this.state.categories.map((category, index) => {
                                    return (
                                            <div>
                                                <li>
                                                    <Link key={category._id} to={`/Categories/${category.id}/WalkThroughs`}>{category.title}</Link>
                                                </li>
                                            </div>
                                            )
                                            })}
                                </ul>
                                </div>
                            </div>
                        </ListDiv>
                    </FormContainer>
                </Container>
               
            </BodyContainer>
        );
    }
}

export default CatHome;