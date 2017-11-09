import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class StepCreate extends Component {
    state = {
        step: {},
        redirectToWalkthroughs: false
    }
    handleChange = (event) => {
        const updateStep = {
            ...this.state.step
        }
        updateStep[event.target.name] = event.target.value

        this.setState({ step: updateStep })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const catId = this.props.match.params.categoryId
        const walkId = this.props.match.params.walkthroughId
        const res = await axios.post(`/api/categories/${catId}/walkthroughs/${walkId}/steps`, { 'step': this.state.step })

        this.setState({ redirectToWalkthroughs: true })

    }
    render() {
        if (this.state.redirectToWalkthroughs) {
            return <Redirect to={`/categories/${this.props.match.params.categoryId}/walkthroughs/${this.props.match.params.walkthroughId}/steps`} />
          }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                        <h2>New Step</h2>
                        <input
                            placeholder='Title'
                            onChange={this.handleChange}
                            name="title"
                            type="text"
                            required
                           
                            value={this.state.step.title} />
                            <input
                            placeholder='Description'
                            onChange={this.handleChange}
                            name="body"
                            type="text"
                            
                           
                            value={this.state.step.body} />
                            <input
                            placeholder='Helpful Links'
                            onChange={this.handleChange}
                            name="links"
                            type="text"
                            
                           
                            value={this.state.step.links} />
                        <div>
                            <button>Create Step</button>
                        </div>
                    </form>
            </div>
        );
    }
}

export default StepCreate;