import React, { Component } from 'react';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import { Container, FormContainer, BodyContainer, ListDiv, Style } from "../StyledComponents/DefaultStyle"
import RaisedButton from 'material-ui/RaisedButton';
class CatHome extends Component {
    state = {
        categories: [],
        meetups: []
    }
    //this finds and mounts all categories and meetups that relate to the category based on the title
    async componentDidMount() {
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
        if (!localStorage['access-token']) {
            return <Redirect to='/' />
        }
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
                                    <Link to="/categories/create"><RaisedButton label="New Category" style={Style} /></Link>
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