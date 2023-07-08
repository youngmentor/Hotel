import './Header.css'
import Logo from './1 (12).png'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineMenu } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
    const navigate = useNavigate()
    const [header, setHeader] = useState(false)

    const HeaderDrop = (
        header && (
            <div className='HeaderDrop'>
                {/* <FaTimes/> */}
                <p onClick={() => navigate("alllogin/adminlogin")} style={{ cursor:"pointer" }} >Login</p>
                <p onClick={() => navigate("/allsignup/adminsignup")} style={{ cursor:"pointer" }}>sign up</p>
            </div>
        )
    )
    return (
        <div className="HeaderMain">
            <div className="HeaderWrap">
               <div className='Header_LogoDiv'>
               <img src={Logo} className='HeaderLogoImg' />
               </div>
                <div className='HeaderNav'>
                    <p>Home</p>
                    <p>About</p>
                    <p>Rooms</p>
                    <p>Location</p>
                </div>
                <div className='HeaderBurgeMenu'>
                    {
                        header ? <FaTimes onClick={() => { setHeader(!header) }} className='TimesIcon' /> :
                            <MdOutlineMenu onClick={() => { setHeader(!header) }} className='MenuIcon' />
                    }
                    {header && HeaderDrop}
                   
                </div>
                {/* <GiHamburgerMenu className='BurgerIcon' /> */}
                {/* <button onClick={() => navigate("/allsignup/adminsignup")}>Signup</button>
                <button onClick={() => navigate("alllogin/adminlogin")}>login</button> */}
            </div>
        </div>
    )
}
export default Header
