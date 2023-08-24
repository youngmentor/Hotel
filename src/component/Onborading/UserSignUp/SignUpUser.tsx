import React, { useContext, useState } from 'react';
import './SignUp.css'
import { useNavigate } from 'react-router-dom';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { UserSignUpForm} from '../../APIS/TypeChecks';
import { useMutation } from '@tanstack/react-query';
import ButtonLoading from '../../../ButtonLoader/ButtonLoader';
import { ThemeContext } from '../../ContextApi/ContextApi';
import Swal from 'sweetalert2';
import { userSignUp } from '../../APIS/Mutation';
const SignUpUser: React.FC = () => {
  const navigate = useNavigate()
  const {login_alert} =useContext(ThemeContext)
  const [formData, setFormData] = useState<UserSignUpForm>({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber:  '',
  });
  const[ showPassword, setShowPassword] = useState(false)
  const visiblePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
const {isLoading,  mutate} = useMutation(['adminSignup'],userSignUp ,{
  onSuccess: (data)=>{
    login_alert()
    setTimeout(()=>{
      navigate('/alllogin/login')
    },500)
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: data?.data?.message,
      showConfirmButton: false,
      timer: 2500
    })
  }
});
const handleUserSignUp = async (event: React.FormEvent) => {
  event.preventDefault();
  console.log('clicked')
   mutate(formData)
  console.log(formData)
};

  return (
    <div className='SignUpMain'>
      <div className='SignUpLeft'>
      <img src='/NewRoomLogo.png' alt='NewRoomLogo' className='SignUpNewRoomLogo' onClick={(()=> navigate('/'))}/>
        <h2>Create an Account to continue as a User</h2>
        <form onSubmit={handleUserSignUp} className='SignUpForm'>
          <div className='SignUpInputDiv'>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className='SignUpinput'
              placeholder='Name'
              required
            />
          </div>
          <div className='SignUpInputDiv'>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className='SignUpinput'
              placeholder='Email'
              required
            />
          </div>
          <div className='SignUpInputDiv'>
            <label htmlFor="password">Password</label>
            <div className='Input_Eye'>
              <input
                type= 'password' 
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className='SignUpinputPass'
                placeholder='Password'
                required
              />
               <div className="password-toggle">
             
            </div>
            </div>
          </div>
          <div className='SignUpInputDiv'>
            <label htmlFor="password">Confirm Password</label>
          <div className='Input_Eye'>
          <input
              type={showPassword ? 'text' : 'password'}
              id="confirmpassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className='SignUpinputPass'
              placeholder='Confirm Password'
              required
            />
             <div className="password-toggle" onClick={visiblePassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          </div>
          <div className='SignUpInputDiv'>
            <label htmlFor="password">Phone Number</label>
            <input
              type="number"
              id="phonenumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className='SignUpinput'
              placeholder='Phone Number'
              required
            />
          </div>
          <button type="submit" className='SignUpBttn'>{isLoading? <ButtonLoading/>: "Sign Up"}</button>
        </form>
        <span className='SigupSpan'>Already have an account? <b onClick={() => navigate("/alllogin/login")} >Login here</b></span>
      </div>
    </div>
  );
};

export default SignUpUser;
