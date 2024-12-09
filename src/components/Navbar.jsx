import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Navbar.css";
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";

const Navbar = () => { 
    const location = useLocation();
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(clicked=>!clicked); 
        console.log(clicked)
    };
    const handleClick2 = () => {
        setClicked(clicked => false);
        
    };

    // Helper function to check if a link is active
    const isActive = (path) => location.pathname === path;

    return (
        <div>
            <nav className="nav">
                <Link to="/" 
                    onClick={handleClick2}>
                    <img  className="logo" src={logo} alt="Logo" />
                    
                </Link>

                <div className={`links ${!clicked ? 'active1' : ''}`}>
                    <Link
                        to="/about"
                        onClick={handleClick}
                        className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                    >
                        Timeline
                    </Link>

                    <Link
                        to="/gallery"
                        onClick={handleClick}
                        className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}
                    >
                        Gallery
                    </Link>

                    <Link
                        to="/project"
                        onClick={handleClick}
                        className={`nav-link ${isActive('/project') ? 'active' : ''}`}
                    >
                        Projects
                    </Link>

                    <Link
                        to="/roombook"
                        onClick={handleClick}
                        className={`nav-link ${isActive('/roombook') ? 'active' : ''}`}
                    >
                        Room Booking
                    </Link>

                    <Link
                        to="/contact"
                        onClick={handleClick}
                        className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                    >
                        Contact Us
                    </Link>
                </div>
                <div id="mobile" onClick={handleClick}>
                     <i id="bar" className={clicked ? 'fas fa-times':'fas fa-bars'}></i>
                </div> 
            </nav>
        </div>
    );
};

export default Navbar;
