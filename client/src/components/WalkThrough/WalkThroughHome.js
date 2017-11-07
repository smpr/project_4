import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'

class WalkThroughHome extends Component {
    state = {
        walkthroughs: []
    }
    async componentWillMount() {
        try {
            const catId = this.props.match.params.categoryId
            
            const res = await axios.get(`/api/categories/${catId}/walkthroughs`)
            
            this.setState({ walkthroughs: res.data })
            
        } catch (error) {
            console.log(error)
        }

    }
    render() {
        return (
            <div>
                <Link to={`/Categories/${this.props.match.params.categoryId}/WalkThroughs/Create`}>Create New Walkthrough</Link>
                <div>
                 {this.state.walkthroughs.map((walkthrough, index) => {
                    return (
                        <div><Link key={walkthrough._id} to={`/Categories/${walkthrough.id}/WalkThroughs`}>{walkthrough.name}
                        </Link></div>
                    
                    )
                })} 
            </div>
            </div>
        );
    }
}

export default WalkThroughHome;