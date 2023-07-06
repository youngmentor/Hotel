import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Hotel1 from './HotelImg1.jpeg'
// import './Login.css'

interface LoginForm {
  email: '',
  password: '',
 
}
const ALogin: React.FC = () => {
  const navigate = useNavigate()
  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: '',
  password: '',
  })
  const [loggedIn, setLoggedIn] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post('', loginForm);

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
      {/* <div className='LoginLeft'>
        <img src={Hotel1} alt='loginimage' className='LoginImageLeft' />
      </div> */}
      <div className='LoginRight'>
        <h1>Welcome back </h1>
        <form onSubmit={handleSubmit} className='LoginForm'>
          <div className='LoginInput'>
            <label htmlFor="username">Username</label>
            <input
              placeholder='Username'
              type="text"
              id="username"
              value={loginForm.email}
              onChange={handleChange}
              className='Input'
            />
          </div>
          <div className='LoginInput'>
            <label htmlFor="password">Password</label>
            <input
              placeholder='Password'
              type="password"
              id="password"
              value={loginForm.password}
              onChange={handleChange}
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

export default ALogin;
