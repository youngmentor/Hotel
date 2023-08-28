const {VITE_TOKEN_USER } = import.meta.env;
import React, { useContext, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
// import Hotel1 from './HotelImg1.jpeg'
import './Login.css'
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { userLoginRequest} from '../../APIS/LoginApi';
import { ThemeContext } from '../../ContextApi/ContextApi';
import ButtonLoading from '../../../ButtonLoader/ButtonLoader';
import { userLogin } from '../../APIS/Mutation';
import Swal from 'sweetalert2';
const Login: React.FC = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {verifyAlert} = useContext(ThemeContext)
  const [login, setLogin] = useState<userLoginRequest>({
    email: '',
    password: ''
})
  const visiblePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  };
  const {mutate, isLoading} = useMutation( ['userlogin'], userLogin , {
    onSuccess: (data) => {
        console.log(data);
        localStorage.setItem(VITE_TOKEN_USER, data?.data.accessToken)
        const selectedRoomId = localStorage.getItem('roomid');
        // console.log(selectedRoomId);
        if (selectedRoomId) {
          navigate(`/detail/${selectedRoomId}`);
          localStorage.removeItem('roomid');// Clear the stored room ID
        } else {
          navigate('/');
        }
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: data?.data?.message,
          showConfirmButton: false,
          timer: 2500
        })
    },
    onError: (error: any) => {
        console.error(error);
        if (error?.response && error?.response?.data && error?.response?.data?.message) {
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error?.response?.data?.message,
          });
      }
    },
});

const handleUserLogin = (e: any) => {
  e.preventDefault()
  console.log("clicked")
  mutate(login);
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
              value={login.email}
              onChange={handleChange}
              className='Input'
              name='email'
              required
            />
          </div>
          <div className='LoginInput'>
            <label htmlFor="password">Password</label>
            <div className='Input_EyeIcon'>
              <input
                placeholder='Password'
                type={showPassword ? 'text' : 'password'}
                id="password"
                name='password'
                value={login.password}
                onChange={handleChange}
                className='InputPass'
                required
              />
              <div className="password-toggle" onClick={visiblePassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>
        <p onClick={()=>navigate('/user-forgetpassword')} className='ForgetPassword'>Forgot password?</p>
          <button type="submit" className='LoginBttn'>{isLoading ? <ButtonLoading/> : "Login"}</button>
        </form>
        <span className='LoginSpan'>Don't have an account yet? <b onClick={() => navigate("/allsignup/usersignup")} >create account</b></span>
      </div>
    </div>
  );
};

export default Login;
