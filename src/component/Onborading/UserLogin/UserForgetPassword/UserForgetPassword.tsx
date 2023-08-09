import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";
import './UserForgetPassword.css'
const UserForgetPassword: React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const navigate = useNavigate()
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    return (
        <div className='forget'>
            <form className='forget_text' >
                <img src='/RoomLogo-RBG.png' alt='NewRoomLogo' className='LoginNewRoomLogo' onClick={(() => navigate('/'))} />
                <h2>Forgot Your Password?</h2>
                <p>Enter the email address you used to register. We will send
                    you an email to reset your password.</p>
                <input type="email" value={email} onChange={handleEmailChange} className='forget_input' placeholder='Email' />
                <button type="submit" className='forget_button pointer' >Submit</button>
                <div className='forget_back pointer' onClick={() => { navigate('/alllogin/login') }} ><MdOutlineArrowBack fontSize={20} /><p>Back to login</p></div>
            </form>

        </div>
    )
}

export default UserForgetPassword