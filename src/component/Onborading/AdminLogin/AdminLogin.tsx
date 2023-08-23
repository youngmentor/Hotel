const { VITE_TOKEN } = import.meta.env;
import React, { useContext, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css'
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { LoginRequest } from '../../APIS/LoginApi';
import ButtonLoading from '../../../ButtonLoader/ButtonLoader';
import { ThemeContext } from '../../ContextApi/ContextApi';
import { adminLogin } from '../../APIS/Mutation';
import Swal from 'sweetalert2';
const AdminLogin: React.FC = () => {
    const navigate = useNavigate()
    const [login, setLogin] = useState<LoginRequest>({
        email: '',
        password: ''
    })
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const { verifyAlert, } = useContext(ThemeContext)
    // const [errorMessage, setErrorMessage] = useState<string>('')
    const showPasswords = () => {
        setShowPassword(!showPassword);
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        });
    };

    const { mutate, isLoading,} = useMutation(['adminlogin'], adminLogin, {
        onSuccess: (data) => {
            localStorage.setItem(VITE_TOKEN, data?.data.accessToken)
            // console.log(data?.data.accessToken);
            navigate("/admindash/dashmain")
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: data?.data?.message,
                showConfirmButton: false,
                timer: 2500
              })
            //   console.log(data?.data?.message)
        },
        onError: (error) => {
            console.error(error);
        },
    });

    const handleLogin = (event: any) => {
        event.preventDefault()
        // console.log("clicked")
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
                <img src='/NewRoomLogo.png' alt='NewRoomLogo' className='LoginNewRoomLogo' onClick={(() => navigate('/'))} />
                <h1>Welcome back Partner </h1>
                <form className='LoginForm' onSubmit={handleLogin}>
                    <div className='LoginInput'>
                        <label htmlFor="email">Email Address</label>
                        <input
                            placeholder='Email Address'
                            type="text"
                            id="email"
                            value={login.email}
                            onChange={handleChange}
                            className='Input'
                            name='email'
                            required
                        />
                    </div>
                    <div className='LoginInputPass'>
                        <label htmlFor="password">Password</label>
                        <div className='Input_EyeIcon'>
                            <input
                                placeholder='Password'
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                value={login.password}
                                onChange={handleChange}
                                className='InputPass'
                                name='password'
                                required
                            />
                            <div className="password-toggle" onClick={showPasswords}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </div>
                    </div>
                    <p onClick={(() => navigate("/adminforgetpassword"))} className='ForgetPassword'>Forgot Password?</p>
                    <button type="submit" className='LoginBttn'>{isLoading ? <ButtonLoading/> : "Login"}</button>
                </form>
                <span className='LoginSpan'>Don't have an account yet? <b onClick={() => navigate("/allsignup/adminsignup")} >create account</b></span>
            </div>
        </div>
    );
};

export default AdminLogin;
