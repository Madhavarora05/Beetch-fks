import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import './login.css';

function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });
      const data = await response.json();

      if (response.ok) {
        sessionStorage.setItem('token', data.token);
        const decodedToken = jwtDecode(data.token);
        console.log('Decoded Token:', decodedToken);

        alert(data.message);
        navigate('/');
      } else {
        alert(data.error || 'Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed. Please try again later.');
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form" aria-label="Login Form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={loginData.email}
          onChange={handleChange}
          required
          aria-label="Email"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleChange}
          required
          aria-label="Password"
        />
        <button type="submit">Login</button>
      </form>
      <div className="login-links">
        <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
        <Link to="/register" className="create-account-link">Create Account</Link>
      </div>
    </div>
  );
}

export default Login;
