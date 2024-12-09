import React from 'react'
import { scient } from '../assets'
import '../styles/header.css';
import { Link } from 'react-router-dom';

const UserHeader = () => {
  return (
    <div class="header">
            <div class="logo">
                <img src={scient} alt="Logo" />
            </div>
                <div className="nav-links">
                    <Link to="/userdashboard" className="nav-link">HOME</Link>
                    <span className="separator">|</span>
                    <Link to="/userdashboard/history" className="nav-link">HISTORY</Link>
                    <span className="separator">|</span>
                    <Link to="/userdashboard/profile" className="nav-link">PROFILE</Link>
                </div>
    </div>
  )
}

export default UserHeader