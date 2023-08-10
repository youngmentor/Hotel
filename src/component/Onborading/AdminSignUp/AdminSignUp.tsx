import React, { useContext, useState } from 'react';
import { useMutation } from 'react-query';
import './AdminSignUp.css'
import { useNavigate } from 'react-router-dom';
import { FaEyeSlash, FaEye,} from "react-icons/fa";
import { SignUpForm} from '../../APIS/TypeChecks';
import ButtonLoading from '../../../ButtonLoader/ButtonLoader';
import { ThemeContext } from '../../ContextApi/ContextApi';
import { adminSignUp } from '../../APIS/Mutation';
const AdminSignUp: React.FC = () => {
  const {login_alert} = useContext(ThemeContext)
  const navigate = useNavigate()
  const [formData, setFormData] = useState<SignUpForm>({
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
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
  const {isLoading,  mutate} = useMutation(['adminSignup'], adminSignUp,{
    onSuccess: ()=>{
      login_alert()
      setTimeout(()=>{
        navigate('/alllogin/adminlogin')
      },500)
    }
  });

const handleSignUp = async (event: React.FormEvent) => {
  event.preventDefault();
  console.log('clicked')
  const {confirmpassword, ...others}= formData
   mutate(others)
  console.log(others)
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
          <button type="submit" className='SignUpBttn'>{isLoading ? <ButtonLoading/>: "SignUp"}</button>
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
