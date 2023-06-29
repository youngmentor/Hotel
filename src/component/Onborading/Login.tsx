import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Hotel1 from './HotelImg1.jpeg'
import './Login.css'
const Login: React.FC = () => {
  const navigate = useNavigate()
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
      <div className='LoginLeft'>
        <img src={Hotel1} alt='loginimage' className='LoginImageLeft' />
      </div>
      <div className='LoginRight'>
        <h1>Welcome back </h1>
        <form onSubmit={handleSubmit} className='LoginForm'>
          <div className='LoginInput'>
            <label htmlFor="username">Username</label>
            <input
              placeholder='Username'
              type="text"
              id="username"
              value={email}
              onChange={handleEmailChange}
              className='Input'
            />
          </div>
          <div className='LoginInput'>
            <label htmlFor="password">Password</label>
            <input
              placeholder='Password'
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className='Input'
            />
          </div>
          <button type="submit" className='LoginBttn'>Login</button>
          {/* <button onClick={() => navigate("/signup")}>signup</button> */}
        </form>
        <span className='LoginSpan'>Don't have an account yet? <b onClick={() => navigate("/signup")} >create account</b></span>
      </div>
    </div>
  );
};

export default Login;
