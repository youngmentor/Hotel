import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
// import Hotel1 from './HotelImg1.jpeg'
import './Login.css'
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { userLogin, userLoginRequest, userLoginResponse } from '../../APIS/LoginApi';
const Login: React.FC = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const visiblePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const mutation = useMutation<userLoginResponse, Error, userLoginRequest>(userLogin, {
    onSuccess: (data) => {
      console.log(data.message);
      console.log(data);
      navigate("/userdash/userprofile")
    },
    onError: (error) => {
      console.error(error.message);
    },
  });

  const handleUserLogin = () => {
    console.log("clicked")
    const data: userLoginRequest = { email, password };
    mutation.mutate(data);
  };

  return (
    <div className='LoginMain'>
      <div className='LoginRight'>
        <img src='/NewRoomLogo.png' alt='NewRoomLogo' className='LoginNewRoomLogo' onClick={(()=> navigate('/'))}/>
        <h1>Welcome back User</h1>
        <form onSubmit={handleUserLogin} className='LoginForm'>
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
              <div className="password-toggle" onClick={visiblePassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>
          <button type="submit" className='LoginBttn'>Login</button>
        </form>
        <span className='LoginSpan'>Don't have an account yet? <b onClick={() => navigate("/allsignup/usersignup")} >create account</b></span>
      </div>
    </div>
  );
};

export default Login;
