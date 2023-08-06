import React, { useContext, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
// import Hotel1 from './HotelImg1.jpeg'
import './Login.css'
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { userLogin, userLoginRequest, userLoginResponse } from '../../APIS/LoginApi';
import { useDispatch } from 'react-redux';
import { addUser } from '../../../Redux/Features';
import { ThemeContext } from '../../ContextApi/ContextApi';
import ButtonLoading from '../../../ButtonLoader/ButtonLoader';
const Login: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {verifyAlert} = useContext(ThemeContext)
  const [loading, setLoading] =useState<boolean>(false)
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
      setLoading(false)
      dispatch(addUser(data.data)) 
      console.log(data.message);
      console.log(data);
      navigate("/userdash/userprofile")
    },
    onError: (error) => {
      setLoading(false)
      console.error(error.message);
    },
  });

  const handleUserLogin = () => {
    console.log("clicked")
    setLoading(true)
    const data: userLoginRequest = { email, password };
    mutation.mutate(data);
  };

  return (
    <div className='LoginMain'>
       {verifyAlert && <div className='AdminwelcomeMssg'>
                <div>
                    <p>Please check your Email a verification link has been sent to you</p>
                </div>
            </div>}
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
          <button type="submit" className='LoginBttn'>{loading? <ButtonLoading/> : "Login"}</button>
        </form>
        <span className='LoginSpan'>Don't have an account yet? <b onClick={() => navigate("/allsignup/usersignup")} >create account</b></span>
      </div>
    </div>
  );
};

export default Login;
