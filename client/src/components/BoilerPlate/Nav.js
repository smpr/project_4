import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <div>
                <Link to="/WalkThrough">WalkThroughs </Link>
            </div>
        );
    }
}

export default Nav;