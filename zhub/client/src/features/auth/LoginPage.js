// src/features/auth/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    // Simulate successful login or sign up
    navigate('/home');
  };

  return (
    <div className="login-container">
      <div className="login-form-section">
        <div className="login-logo">
          <h1>ZHUB</h1>
        </div>
        <h4 className="text-muted">Start your journey</h4>
        <h2 className="login-title">Sign Up to ZHUB</h2>
        <Form onSubmit={handleSignUp}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mt-4">
            Sign Up
          </Button>

          <div className="social-login-options mt-3">
            <p>or sign up with</p>
            <div className="social-icons">
              <Button variant="outline-primary" className="social-icon">
                <i className="fab fa-facebook"></i>
              </Button>
              <Button variant="outline-danger" className="social-icon">
                <i className="fab fa-google"></i>
              </Button>
              <Button variant="outline-dark" className="social-icon">
                <i className="fab fa-apple"></i>
              </Button>
            </div>
          </div>

          <div className="text-center mt-3">
            <p>
              Have an account? <a href="/" className="link-primary">Sign in</a>
            </p>
          </div>
        </Form>
      </div>
      <div className="login-image-section"></div>
    </div>
  );
};

export default LoginPage;
