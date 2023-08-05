import React, { useState } from 'react';
import './SignUp.css'
import { useNavigate } from 'react-router-dom';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { UserSignUpForm,UserSignUpResponse  } from '../../APIS/SignUpApi';
import { useMutation } from "react-query";
import axios, {AxiosResponse} from "axios";
const SignUpUser: React.FC = () => {
  const navigate = useNavigate()
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
  const usersignUpMutation = useMutation<AxiosResponse<UserSignUpResponse>, Error, UserSignUpForm>(
    (formData) =>
     axios.post<UserSignUpResponse>('https://hotel-api-7wlm.onrender.com/api/v1//user/register', formData)
 
);
const handleUserSignUp = async (event: React.FormEvent) => {
  event.preventDefault();
  console.log('clicked')
  try {
    const response =  await usersignUpMutation.mutateAsync(formData);
    console.log(response.data.data.message);
    console.log(response.data.data)
    console.log( response.status);
    response.status === 201 ? navigate("/alllogin/login") : null 
  } catch (error) {
    console.error(error  );
  }
};

  return (
    <div className='SignUpMain'>
      <div className='SignUpLeft'>
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
              // required={true}
              className='SignUpinput'
              placeholder='Name'
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
              // required={true}
              className='SignUpinput'
              placeholder='Email'
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
                // required={true}
                className='SignUpinputPass'
                placeholder='Password'
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
              // required={true}
              className='SignUpinputPass'
              placeholder='Confirm Password'
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
              // required={true}
              className='SignUpinput'
              placeholder='Phone Number'
            />
          </div>
          <button type="submit" className='SignUpBttn'>Sign Up</button>
        </form>
        <span className='SigupSpan'>Already have an account? <b onClick={() => navigate("/alllogin/login")} >Login here</b></span>
      </div>
    </div>
  );
};

export default SignUpUser;
