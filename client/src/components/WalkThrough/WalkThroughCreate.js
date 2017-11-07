import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class WalkThroughCreate extends Component {
    state = {
        walkthrough: {
            name: "",
            body: "",
            links: ""
        },
        redirectToHome: false,
        walkId: ""
    }


    handleChange = (event) => {
        const updateWalkthrough = {
            ...this.state.walkthrough
        }
        updateWalkthrough[event.target.name] = event.target.value
        
        this.setState({ walkthrough: updateWalkthrough})
    }
    // this handles the submit function specifically setup on the back end to allow this route directly
    handleSubmit = async (event) => {
        event.preventDefault()
        const catId = this.props.match.params.categoryId
    
       const res = await axios.post(`/api/categories/${catId}/walkthroughs`, { 'walkthrough': this.state.walkthrough })
     
        // this.setState({ redirectToHome: true, walkId: res.data._id })

    }
    render() {
        if (this.state.redirectToHome) {
            return <Redirect to={`/categories/${this.state.userId}/walkthroughs`} />
          }
        return (
            <div>
               <form onSubmit={this.handleSubmit}>
                        <h2>New Walkthrough</h2>
                        <input
                            placeholder='Category Name'
                            onChange={this.handleChange}
                            name="name"
                            type="text"
                            required
                           
                            value={this.state.walkthrough.name} />
                            <input
                            placeholder='Description'
                            onChange={this.handleChange}
                            name="body"
                            type="text"
                            
                           
                            value={this.state.walkthrough.body} />
                            <input
                            placeholder='Category Name'
                            onChange={this.handleChange}
                            name="links"
                            type="text"
                            required
                           
                            value={this.state.walkthrough.links} />
                        <div>
                            <button>Create Category</button>
                        </div>
                    </form>
            </div>
        );
    }
}

export default WalkThroughCreate;