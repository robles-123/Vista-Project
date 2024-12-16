import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css"; // Reusing the same CSS for consistency

const Login = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform any validation or login logic here (e.g., check credentials)
    navigate("/details"); // Navigate to the DetailsPage on successful login
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2 className="signup-title">Log In</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="signup-btn">
            Log In
          </button>
        </form>
        <p className="login-link">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
