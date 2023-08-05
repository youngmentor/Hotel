import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css'
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { LoginRequest,LoginResponse, adminLogin } from '../../APIS/LoginApi';
const AdminLogin: React.FC = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const showPasswords = () => {
        setShowPassword(!showPassword);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

      const mutation = useMutation<LoginResponse, Error, LoginRequest>(adminLogin, {
        onSuccess: (data) => {
          console.log(data.message);
          console.log(data);
          navigate("/admindash/dashmain")
        },
        onError: (error) => {
          console.error(error.message);
        },
      });
    
      const handleLogin = () => {
        console.log("clicked")
        const data: LoginRequest = { email, password };
        mutation.mutate(data);
      };

    return (
        <div className='LoginMain'>
            <div className='LoginRight'>
                <h1>Welcome back Partner </h1>
                <form className='LoginForm' onSubmit={handleLogin}>
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
                    <button onClick={(()=>navigate("/admindash/dashmain"))} className='LoginBttn'>Login</button>
                </form>
                <span className='LoginSpan'>Don't have an account yet? <b onClick={() => navigate("/allsignup/adminsignup")} >create account</b></span>
            </div>
        </div>
    );
};

export default AdminLogin;
