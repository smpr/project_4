import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const BodyContainer = styled.div`
display:flex;
justify-content: space-around;
background-color: #323232;
height: 100vh;
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
height: 50vh;
width: 25vw;
color: white;
background-color: #4B4B4B;

`

const Button = styled.button`
color: red;
`

class CatHome extends Component {
    state = {
        categories: []
    }
    async componentWillMount() {
        try {
            const res = await axios.get('/api/categories')
            console.log(res.data)
            this.setState({ categories: res.data })
            console.log(this.state.categories)
        } catch (error) {
            console.log(error)
        }

    }
    render() {
        return (
            <BodyContainer>
                
                <FormContainer>
                    <div>
                    <div> Please Select a Category</div>
                    <div><Link to="/categories/create"><button>Create New Category</button></Link></div>
                
                <ul>
                {this.state.categories.map((category, index) => {
                    return (
                        <div><li><Link key={category._id} to={`/Categories/${category.id}/WalkThroughs`}>{category.title}
                        </Link></li></div>

                    )
                })}
                </ul>
                </div>
                </FormContainer>
               
            </BodyContainer>
        );
    }
}

export default CatHome;