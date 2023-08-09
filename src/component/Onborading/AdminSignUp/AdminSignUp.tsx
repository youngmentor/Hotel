import React, { useContext, useState } from 'react';
import { useMutation } from 'react-query';
import axios, { AxiosResponse } from 'axios';
import './AdminSignUp.css'
import { useNavigate } from 'react-router-dom';
import { FaEyeSlash, FaEye,} from "react-icons/fa";
import { SignUpForm, SignUpResponse } from '../../APIS/SignUpApi';
import ButtonLoading from '../../../ButtonLoader/ButtonLoader';
import { ThemeContext } from '../../ContextApi/ContextApi';
const AdminSignUp: React.FC = () => {
  const {login_alert} = useContext(ThemeContext)
  const navigate = useNavigate()
  const [loading, setLoading] =useState<boolean>(false)
  const [formData, setFormData] = useState<SignUpForm>({
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
    phonenumber: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const[ showPassword, setShowPassword] = useState(false)
  const[ showConfirmPassword, setShowConfirmPassword] = useState(false)


  const visiblePassword = () => {
    setShowPassword(!showPassword);
  };
  const visibleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const signUpMutation = useMutation<AxiosResponse<SignUpResponse>, Error, SignUpForm>(
     (formData) =>
      axios.post<SignUpResponse>('https://hotel-api-7wlm.onrender.com/api/v1//manager/register', formData)
  
);
const handleSignUp = async (event: React.FormEvent) => {
  event.preventDefault();
  console.log('clicked')
  setLoading(true)
  try {
    const response =  await signUpMutation.mutateAsync(formData);
    setLoading(false)
    console.log(response.data.message);
    console.log(response.data.data)
    console.log( response.status);
    response.status === 201 ? navigate("/alllogin/adminlogin") : null 
    login_alert()
  } catch (error) {
    setLoading(false)
    console.error('Sign-up error:', error);
  }
};

  return (
    <div className='SignUpMain'>
      <div className='SignUpLeft'>
      <img src='/NewRoomLogo.png' alt='NewRoomLogo' className='LoginNewRoomLogo' onClick={(() => navigate('/'))} />

        <h2>Create an Account to continue As a Partner</h2>
        <form onSubmit={handleSignUp} className='SignUpForm'>
          <div className='SignUpInputDiv'>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
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
              required
              className='SignUpinput'
              placeholder='Email'
            />
          </div>
          <div className='SignUpInputDiv'>
            <label htmlFor="password">Password</label>
            <div className='Input_Eye'>
              <input
               type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className='SignUpinputPass'
                placeholder='Password'
              />
               <div className="password-toggle" onClick={visiblePassword}>
               {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
            </div>
          </div>
          <div className='SignUpInputDiv'>
          <label htmlFor="password">Confirm Password</label>
          <div className='Input_Eye'>
          <input
              type={showPassword ? 'text' : 'password'}
              id="confirmpassword"
              name="confirmpassword"
              value={formData.confirmpassword}
              onChange={handleChange}
              required
              className='SignUpinputPass'
              placeholder='Confirm Password'
            />
             <div className="password-toggle" onClick={visibleConfirmPassword}>
             {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          </div>
          <button type="submit" className='SignUpBttn'>{loading ? <ButtonLoading/>: "SignUp"}</button>
        </form>
        <span className='SigupSpan'>Already have an account? <b onClick={() => navigate("/alllogin/adminlogin")} >Login here</b></span>
      </div>
      {/* <div className='SignUpRight'>
        <img src={HotelSignUp} alt='signupimage' className='SignUpImage' />
      </div> */}
    </div>
  );
};

export default AdminSignUp;
