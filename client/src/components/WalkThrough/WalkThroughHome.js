import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class WalkThroughHome extends Component {
    render() {
        return (
            <div>
                <Link to="/WalkThrough/create">Create New Walkthrough</Link>
                <div>
                    WalkThrough Home
            </div>
            </div>
        );
    }
}

export default WalkThroughHome;