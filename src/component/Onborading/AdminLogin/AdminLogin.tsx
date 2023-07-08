import React, { useState } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css'
import { FaEyeSlash, FaEye } from "react-icons/fa";
const AdminLogin: React.FC = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);

    const showPasswords = () => {
        setShowPassword(!showPassword);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    //   const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    //     setLoginForm({ ...loginForm, [event.target.name]: event.target.value})
    // };
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
            <div className='LoginRight'>
                <h1>Welcome back Admin </h1>
                <form className='LoginForm'>
                    <div className='LoginInput'>
                        <label htmlFor="email">Email Address</label>
                        <input
                            placeholder='Email Address'
                            type="text"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            className='Input'
                        />
                    </div>
                    <div className='LoginInputPass'>
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
                <span className='LoginSpan'>Not an Admin am a User <b onClick={() => navigate("/alllogin/login")} >login here</b></span>
            </div>
        </div>
    );
};

export default AdminLogin;