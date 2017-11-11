import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class CatCreate extends Component {
    state = {
        category: [
            
        ],
        redirectToHome: false,
    }


    handleChange = (event) => {
        const updateCategory = {
            ...this.state.category
        }
        updateCategory[event.target.name] = event.target.value
        this.setState({ category: updateCategory})
    }
    // this handles the submit function specifically setup on the back end to allow this route directly
    handleSubmit = async (event) => {
        event.preventDefault()
        await axios.post(`/api/categories`, { category: this.state.category })
        this.setState({ redirectToHome: true })

    }
    render() {
        
        if (this.state.redirectToHome) {
            return <Redirect to="/categories" />
        }
        return (
            <div>
                Category Create Page
                <form onSubmit={this.handleSubmit}>
                        <h2>New Category</h2>
                        <input
                            placeholder='Category Name'
                            onChange={this.handleChange}
                            name="title"
                            type="text"
                            required
                           
                            value={this.state.category.title} />
                        <div>
                            <button>Create Category</button>
                        </div>
                    </form>
                    
            </div>
        );
    }
}

export default CatCreate;