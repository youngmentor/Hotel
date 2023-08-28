const { VITE_TOKEN } = import.meta.env;
import './Header.css'
import Logo from './RoomLogo-removebg-preview.png'
// import { GiHamburgerMenu } from "react-icons/gi";
// import { MdOutlineMenu } from "react-icons/md";
import { FaTimes, FaRegUserCircle, FaAlignJustify } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../APIS/query';
import { useQuery } from '@tanstack/react-query';

const Header: React.FC = () => {
    const navigate = useNavigate()
    const [header, setHeader] = useState<boolean>(false)
    // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const {
        data: userData,
    } = useQuery(["getuser"], getUser, {
        enabled: !!localStorage.getItem(VITE_TOKEN),
        refetchOnWindowFocus: false,
        onSuccess: () => {
        },
        onError: () => {

        },
    });
    
    const HeaderDrop = (
        header && (
            <div className='HeaderMobileDropDown'>
                {/* <FaTimes/> */}
                {/* <p onClick={() => navigate("alllogin/adminlogin")} style={{ cursor: "pointer" }} >Login As Admin</p>
                <p onClick={() => navigate("/allsignup/adminsignup")} style={{ cursor: "pointer" }}>sign up</p> */}
                {
                    !userData?.data?.data ?
                        <div className='HeaderOnboarding'>
                            <button className='Header_Bttn1' onClick={() => navigate("alllogin/adminlogin")} >Register Your Hotel</button>
                            <button className='Header_Bttn2' onClick={() => navigate("/alllogin/login")}>Book a room</button>
                        </div> :
                        <div className='HeaderUserName'>
                            <div className='HeaderUserNameWrap'>
                                <FaRegUserCircle />
                                <p>{userData?.data?.data?.fullname}</p>
                            </div>
                            <div className='HeaderDashboardNav'>
                                <FaAlignJustify />
                                <p>DashBoard</p>
                            </div>
                        </div>
                }
            </div>
        )
    )
    useEffect(() => {
        !userData?.data?.data
    })
    return (
        <div className="HeaderMain">
            <div className="HeaderWrap">
                <div className='Header_LogoDiv'>
                    <img src={Logo} className='HeaderLogoImg' />
                </div>
                <div className='HeaderNav'>

                </div>
                {!userData?.data?.data ?
                    <div className='Header_Bttn'>
                        <button className='Header_Bttn1' onClick={() => navigate("alllogin/adminlogin")} >Register Your Hotel</button>
                        <button className='Header_Bttn2' onClick={() => navigate("/alllogin/login")}>Book a room</button>
                    </div> :
                    <div className='HeaderUserNameDesktop'>
                        <FaRegUserCircle onClick={(()=>{navigate('/userdash/userprofile')})}/>
                        <p>{userData?.data?.data?.fullname}</p>
                    </div>
                }
                <div className='HeaderBurgeMenu'>
                    {
                        header ? <FaTimes onClick={() => { setHeader(!header) }} className='TimesIconone' /> :
                            <FaRegUserCircle onClick={() => { setHeader(!header) }} className='MenuIcon' />
                    }
                    {header && HeaderDrop}

                </div>
            </div>
        </div>
    )
}
export default Header


