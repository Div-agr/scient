import React, { useState } from 'react';
import '../styles/Profile.css';

const Prof = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="profile-container">
      <div className="profile-box">
        <div className="close-button">×</div>
        <h1 className="profile-title">PROFILE</h1>
        <form onSubmit={handleSubmit} className="profile-form">
          <label className="profile-label">New Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="profile-input"
          />

          <label className="profile-label">New Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="profile-input"
          />

          <label className="profile-label">Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="profile-input"
          />

          <button type="submit" className="profile-button">CONFIRM</button>
        </form>
      </div>
    </div>
  );
};

export default Prof;
