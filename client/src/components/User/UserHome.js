import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
class UserHome extends Component {
    state = { 
        info: {
        city: "",
        state: "",
        address: "",
        country: "",
        zip: "",
        }
    }
    async componentWillMount() {
        try {
            const res = await axios.get('/api/infos')
            console.log(res.data)
            this.setState({ info: res.data })
            console.log(this.state.infos)
        } catch (error) {
            console.log(error)
        }

    }
    render() {
        return (
            <div>
                <div>User Info</div>
                <div>First Name:</div>
                <div>Last Name:</div>
                <div>Street: {this.state.info.address}</div>
                <div>City: {this.state.info.city}</div>
                <div>State: {this.state.info.state}</div>
                <div>Country: {this.state.info.country}</div>
                <div>Zip: {this.state.info.zip}</div>
                <div><Link to='/Users/edit'><button>Edit</button></Link></div>
            </div>
        );
    }
}

export default UserHome;