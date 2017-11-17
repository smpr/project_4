import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {Container, FormContainer, BodyContainer, Button} from "../StyledComponents/DefaultStyle"


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
                        <div>
                            <div> 
                                Please Select a Category
                            </div>
                            <div>
                                <Link to="/categories/create"><button>Create New Category</button></Link>
                            </div>
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
                    </FormContainer>
                </Container>
               
            </BodyContainer>
        );
    }
}

export default CatHome;