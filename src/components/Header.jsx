import React from 'react'
import { scient } from '../assets'
import '../styles/header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div class="header">
            <div class="logo">
                <img src={scient} alt="Logo" />
            </div>
                <div className="nav-links">
                    <Link to="/admindashboard" className="nav-link">HOME</Link>
                    <span className="separator">|</span>
                    <Link to="/admindashboard/requests" className="nav-link">REQUESTS</Link>
                    <span className="separator">|</span>
                    <Link to="/admindashboard/history" className="nav-link">HISTORY</Link>
                    <span className="separator">|</span>
                    <Link to="/admindashboard/profile" className="nav-link">PROFILE</Link>
                </div>
    </div>
  )
}

export default Header