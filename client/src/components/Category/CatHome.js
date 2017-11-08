import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Container = styled.div`
display: flex,
justify-content: center,

`
const CatList = styled.div`
display: flex,
flex-direction: row,
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
                <Link to="/create">Create New Category</Link><br />
                <CatList>
                {this.state.categories.map((category, index) => {
                    return (
                        <div><Link key={category._id} to={`/Categories/${category.id}/WalkThroughs`}>{category.title}
                        </Link></div>

                    )
                })}
                </CatList>
                Category home
            </Container>
        );
    }
}

export default CatHome;