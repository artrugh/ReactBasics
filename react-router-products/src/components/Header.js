import React from 'react';

import { Link } from 'react-router-dom'

// display the link to the routes
// display in every router
const Header = (props) => (

    <header className="header" >
        <div>
            <Link to="/">
                Home </Link>
            <Link to="/products">
                Products</Link>
            <Link to="about">
                About</Link>
        </div>
        <h1 className="title">{props.title}</h1>
        <span className="tagline">{props.tagline}</span>
    </header>

);

export default Header;