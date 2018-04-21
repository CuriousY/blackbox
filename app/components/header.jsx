import React from 'react';
import { Route, Link } from "react-router-dom";

const Header = () => (
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
            <Link className="navbar-brand" to="/">
                <img className="logo" src="/images/logo.jpg" alt="logotext" /> DayBlogs
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/quotes">Quotes
                            <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/poems">Poems</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/stories">Stories</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Header;