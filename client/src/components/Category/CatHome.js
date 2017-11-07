import React, { Component } from 'react';
import axios from 'axios'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
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
            <div>
                <Link to="/create">Create New Category</Link><br />
                {this.state.categories.map((category, index) => {
                    return (
                        <div><Link key={category._id} to={`/Categories/${category.id}/WalkThroughs`}>{category.title}
                        </Link></div>
                    
                    )
                })}
                Category home
            </div>
        );
    }
}

export default CatHome;