import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

const BodyContainer = styled.div`
display:flex;
justify-content: space-around;
background-color: #323232;
height: 100vh;
`
const LinkDiv = styled.div`
display:flex;
justify-content: space-between;
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
width: 25vw;
color: white;
background-color: #4B4B4B;
a {
    color: white;
    text-decoration: none;
}

`

const Button = styled.button`
color: red;
`
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
        this.setState({ category: updateCategory })
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
            <BodyContainer>
                <form onSubmit={this.handleSubmit}>
                    <FormContainer>
                        <div>
                            <h2>New Category</h2>
                        </div>
                        <div>
                            <input
                                placeholder='Category Name'
                                onChange={this.handleChange}
                                name="title"
                                type="text"
                                required

                                value={this.state.category.title} />
                        </div>
                        <div>
                            <button>Create Category</button>
                        </div>
                    </FormContainer>
                </form>

            </BodyContainer>
        );
    }
}

export default CatCreate;