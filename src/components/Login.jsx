import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';
import { FaEye, FaEyeSlash } from 'react-icons/fa';  // Importing eye icons from react-icons

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(email, password)) {
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);  // Toggle the state for password visibility
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo-container">
          <p className="logo-icon">Insightly</p>
          <h2 className="title">Welcome Back !!</h2>
          <p className="subtitle">Your Gateway to Data-Driven Decisions</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          {error && <p className="error">{error}</p>}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="input-group password-group">
            <label htmlFor="password">Password</label>
            <input 
              type={passwordVisible ? 'text' : 'password'}  // Toggle input type based on visibility state
              id="password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            <span className="eye-icon" onClick={togglePasswordVisibility}>
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}  {/* Show eye slash if visible, eye otherwise */}
            </span>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
