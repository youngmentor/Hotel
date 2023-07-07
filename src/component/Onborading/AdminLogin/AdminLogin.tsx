import React, { useState } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css'

interface LoginForm {
  email: string;
  password: string;
 
}
const AdminLogin: React.FC = () => {
  const navigate = useNavigate()
  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: '',
    password: '',
  });
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value})
};
//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post('', loginForm);

//       if (response.status === 200 && response.data.authenticated) {
//         setLoggedIn(true);
//         console.log('Logged in successfully');
//       } else {
//         setLoggedIn(false);
//         console.log('Invalid username or password');
//       }
//     } catch (error) {
//       console.error('Error occurred during login:', error);
//       setLoggedIn(false);
//     }
//   };



  return (
    <div className='LoginMain'>
      {/* <div className='LoginLeft'>
        <img src={Hotel1} alt='loginimage' className='LoginImageLeft' />
      </div> */}
      <div className='LoginRight'>
        <h1>Welcome back Admin </h1>
        <form className='LoginForm'>
          <div className='LoginInput'>
            <label htmlFor="email">Username</label>
            <input
              placeholder='Email Address'
              type="text"
              id="email"
              value={loginForm.email}
              onChange={handleChange}
              className='Input'
            />
          </div>
          {/* <input/> */}
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
        <span className='LoginSpan'>Not an Admin am a User <b onClick={() => navigate("/alllogin/login")} >login here</b></span>
      </div>
    </div>
  );
};

export default AdminLogin;
