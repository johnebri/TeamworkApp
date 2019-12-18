import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="nav-wrapper red darken-3">
                <div className="container">
                    <NavLink to="/dashboard" className="brand-logo left">Teamwork</NavLink>
                    <ul className="right">
                        <li><NavLink to="/dashboard">Home</NavLink></li>
                        <li><NavLink to="/articles">Articles</NavLink></li>
                        <li><NavLink to="/gifs">Gifs</NavLink></li>
                        <li><NavLink to="/">Logout</NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;