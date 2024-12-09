import React, { useState } from "react";
import "../styles/roombook.css";
import axios from "axios";

const Roombook = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send login request to backend
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        name: formData.username,
        password: formData.password,
      });

      const { token } = response.data; // Extract token from response

      // Store the JWT token in localStorage
      localStorage.setItem("authToken", token);

      // Redirect based on the username (admin if 'Scient')
      const decoded = JSON.parse(atob(token.split('.')[1])); // Decode JWT token
      console.log("Decoded JWT:", decoded);
      if (decoded.isAdmin) {
        // Open admin dashboard in the same tab
        window.location.href = '/admindashboard';
      } else {
        // Open user dashboard in the same tab
        window.location.href = '/userdashboard';
      }
    } catch (err) {
      // Handle login error
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="box">
      <div className="welcome-section">
        <h1>Welcome<br />To</h1>
        <h2>SCIENt</h2>
      </div>
      <div className="login-section">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <a href="#" className="forgot-password">Forgot Password?</a>
        </form>
      </div>
    </div>
  );
};

export default Roombook;
