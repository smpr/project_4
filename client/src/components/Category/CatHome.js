import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Container = styled.div`
display: flex;
justify-content: center;
align-content: center;
flex-direction: column;
`
const CatList = styled.div`
display: flex;

justify-content: center;
align-content: center;
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
            <Container>
                
                <CatList>
                    <div>
                    <div> Please Select a Category</div>
                    <div><Link to="/create"><button>Create New Category</button></Link></div>
                
                <ul>
                {this.state.categories.map((category, index) => {
                    return (
                        <div><li><Link key={category._id} to={`/Categories/${category.id}/WalkThroughs`}>{category.title}
                        </Link></li></div>

                    )
                })}
                </ul>
                </div>
                </CatList>
                Category home
            </Container>
        );
    }
}

export default CatHome;