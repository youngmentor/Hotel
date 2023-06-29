import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login: React.FC = () => {
  const navigate= useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('', {
        email,
        password,
      });
      
      // Check the response status or data for authentication success
      if (response.status === 200 && response.data.authenticated) {
        setLoggedIn(true);
        console.log('Logged in successfully');
      } else {
        setLoggedIn(false);
        console.log('Invalid username or password');
      }
    } catch (error) {
      console.error('Error occurred during login:', error);
      setLoggedIn(false);
    }
  };
  

  if (loggedIn) {
    return <div>You are logged in!</div>;
  }

  return (
    <div className='LoginMain'>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
        <button onClick={() => navigate("/signup")}>signup</button>
      </form>
    </div>
  );
};

export default Login;
