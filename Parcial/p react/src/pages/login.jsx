import React, { useState } from 'react';
import "../styles/login.css";
import usernameIcon from "../assets/username.svg";

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);


  const handleSignIn = () => {
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe ? "Sí está seleccionado" : "No está seleccionado");
  };

  return (
    <div className="phone-body">
      <div className="phone-screen">
        <div className="balls-background" />

        <div className="top-bar">
          <div className="time">12:00</div>
          <div className="status-icons">
      
            <svg className="wifi-icon" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 3C6.5 3 4.3 4.1 2.8 5.8L9 12L15.2 5.8C13.7 4.1 11.5 3 9 3ZM9 0C4 0 0 2.2 0 5.5L2 7.5C2 5.3 5.2 3 9 3C12.8 3 16 5.3 16 7.5L18 5.5C18 2.2 14 0 9 0Z" fill="white"/>
            </svg>
            
          
            <svg className="cellular-icon" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="14" y="8" width="2" height="4" rx="0.5" fill="white"/>
              <rect x="10" y="6" width="2" height="6" rx="0.5" fill="white"/>
              <rect x="6" y="4" width="2" height="8" rx="0.5" fill="white"/>
              <rect x="2" y="2" width="2" height="10" rx="0.5" fill="white"/>
            </svg>
            
        
            <svg className="battery-icon" width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="18" height="10" rx="1.5" stroke="white" strokeWidth="1.5"/>
              <rect x="20" y="4" width="2" height="4" rx="0.5" fill="white"/>
              <rect x="3" y="3" width="3" height="6" rx="0.5" fill="white"/>
              <rect x="7" y="3" width="3" height="6" rx="0.5" fill="white"/>
              <rect x="11" y="3" width="3" height="6" rx="0.5" fill="white"/>
            </svg>
          </div>
        </div>

        <div className="user-icon">
          <img src={usernameIcon} alt="User Icon" className="user-svg" />
        </div>

        <div className="login-container">
          <input
            type="text"
            placeholder="Username"
            className="login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="remember-me">
            <input
              type="checkbox"
              id="remember"
              className="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button className="signin-button" onClick={handleSignIn}>
            SIGN IN
          </button>

          <a href="#" className="forgot-password">Forgot password?</a>
        </div>

        <div className="bottom-line" />
      </div>
    </div>
  );
}

export default Login;