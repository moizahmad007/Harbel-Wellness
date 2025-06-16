import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage = ({ handleLogin, handlePageChange,handlePageChange3 }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@example.com" && password === "password123") {
      // Sample validation (you can replace this with actual login logic)
      handleLogin();
    } else {
      setError("Invalid email or password.");
    }
  };

  const handleCancel = () => {
    // Navigate back to the home page
    handlePageChange("home");
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="login-form">
        <label className="input-label">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="input-field"
          />
        </label>
        <label className="input-label">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            className="input-field"
          />
        </label>
        {error && <p className="error-message">{error}</p>}
        
        <div className="form-actions">
          <button type="submit" className="submit-btn">Login</button>
          <button type="button" className="cancel-btn" onClick={() => handlePageChange3("home")}>Cancel</button>
        </div>
        <div className="forgot-password">
          <button type="button" className="forgot-btn">Forgot Password</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
