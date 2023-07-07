import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import Hotel1 from './HotelImg1.jpeg'
import './Login.css'
import { FaEyeSlash, FaEye } from "react-icons/fa";
const Login: React.FC = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);

  const showPasswords = () => {
      setShowPassword(!showPassword);
  };
  const handleEmailChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
};
const handlePasswordChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
};
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post('', {
        email,
        password
      });

      // Check the response status or data for authentication success
      if (response.status === 200 && response.data.authenticated) {
       
        console.log('Logged in successfully');
      } else {
    
        console.log('Invalid username or password');
      }
    } catch (error) {
      console.error('Error occurred during login:', error);
     
    }
  };

  return (
    <div className='LoginMain'>
      {/* <div className='LoginLeft'>
        <img src={Hotel1} alt='loginimage' className='LoginImageLeft' />
      </div> */}
      <div className='LoginRight'>
        <h1>Welcome back User</h1>
        <form onSubmit={handleSubmit} className='LoginForm'>
          <div className='LoginInput'>
            <label htmlFor="username">Email Address</label>
            <input
              placeholder='EmaIL Address'
              type="text"
              id="username"
              value={email}
              onChange={handleEmailChange}
              className='Input'
            />
          </div>
          <div className='LoginInput'>
            <label htmlFor="password">Password</label>
            <div className='Input_EyeIcon'>
                            <input
                                placeholder='Password'
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                className='InputPass'
                            />
                            <div className="password-toggle" onClick={showPasswords}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </div>
          </div>
          <button type="submit" className='LoginBttn'>Login</button>
          {/* <button onClick={() => navigate("/signup")}>signup</button> */}
        </form>
        <span className='LoginSpan'>Don't have an account yet? <b onClick={() => navigate("/signup")} >create account</b></span>
        <span className='LoginSpan'>I am an Admin  <b onClick={() => navigate("/alllogin/adminlogin")} >Login here</b></span>
      </div>
    </div>
  );
};

export default Login;
