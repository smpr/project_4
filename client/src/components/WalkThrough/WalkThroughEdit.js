import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios'
class WalkthroughEdit extends Component {
    state = {
        walkthrough: {},
        redirectToWalkthrough: false
    }
    async componentWillMount() {
        try {
            const catId = this.props.match.params.categoryId
            const walkId = this.props.match.params.walkthroughId
            const res = await axios.get(`/api/categories/${catId}/walkthroughs/${walkId}`)
            console.log(res.data)
            this.setState({ walkthrough: res.data })

        } catch (error) {
            console.log(error)
        }
    }
        editWalk = async () => {
            const catId = this.props.match.params.categoryId
            const walkId = this.props.match.params.walkthroughId
            const res = await axios.patch(`/api/categories/${catId}/walkthroughs/${walkId}`, {
                walkthrough: this.state.walkthrough,


            })
            this.setState({ walkthrough: res.data, redirectToWalkthrough: true })

        }
        handleChange = (event) => {
            const attribute = event.target.name
            const clonedWalk = { ...this.state.walkthrough }
            clonedWalk[attribute] = event.target.value
            this.setState({ walkthrough: clonedWalk })
        }
        deleteWalk = async () => {
            const catId = this.props.match.params.categoryId
            const walkId = this.props.match.params.walkthroughId
            const res = await axios.delete(`/api/categories/${catId}/walkthroughs/${walkId}`)
            //redirect back to the user page after the id has been deleted
            this.setState({ redirectToWalkthrough: true })

        }

    
    render() {
        if (this.state.redirectToWalkthrough) {
            return <Redirect to={`/Categories/${this.props.match.params.categoryId}/WalkThroughs`} />
          }
        return (
            <div>
                <div>
                    <br />
                    <h2><b>Edit Walkthrough</b></h2>
                    <br />
                    Title: <input onChange={this.handleChange} name="name" value={this.state.walkthrough.name} />

                    <div>
                        Description: <input onChange={this.handleChange} name="body" value={this.state.walkthrough.body} />
                    </div>
                    <div>
                        Links:<input onChange={this.handleChange} name="links" value={this.state.walkthrough.links} />
                    </div>
                    <button onClick={this.deleteWalk}>Delete</button>
                    <button onClick={this.editWalk}>Edit</button>
                </div>
            </div>
        );
    }
}

export default WalkthroughEdit;