const { VITE_TOKEN } = import.meta.env;
import './Header.css'
import Logo from './RoomLogo-removebg-preview.png'
// import { GiHamburgerMenu } from "react-icons/gi";
// import { MdOutlineMenu } from "react-icons/md";
import { FaTimes, FaRegUserCircle, FaAlignJustify } from "react-icons/fa";
import {useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../APIS/query';
import { useQuery } from '@tanstack/react-query';

const Header: React.FC = () => {
    const navigate = useNavigate()
    const [header, setHeader] = useState<boolean>(false)
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const checkAuthentication = async () => {
        const token = localStorage.getItem(VITE_TOKEN);
        if (token) {
          // Fetch user data or perform authentication check here
          try {
          await getUser(); // Fetch user data or perform authentication check
            setIsLoggedIn(true);
          } catch (error) {
            setIsLoggedIn(false);
          }
        } else {
          setIsLoggedIn(false);
        }
      };
    
      useEffect(() => {
        checkAuthentication();
      }, []);
    const {
        data: userData,
        refetch
    } = useQuery(["getuser"], getUser, {
        enabled: !!localStorage.getItem(VITE_TOKEN),
        refetchOnWindowFocus: false,
        onSuccess: () => {
            refetch()
        },
        onError: () => {

        },
    });
    // const handleNavigate = () => {
    //     if (userData?.role === 'admin') {
    //       navigate('/admindashboard');
    //     } else {
    //       navigate('/userdashboard');
    //     }
    //   };
    // const isLoggedIn = !!userData?.data?.data;
    const HeaderDrop = (
        header && (
            <div className='HeaderMobileDropDown'>
                {
                    isLoggedIn ?
                        <div className='HeaderUserName'>
                            <div className='HeaderUserNameWrap'>
                                <FaRegUserCircle />
                                <p>{userData?.data?.data?.fullname}</p>
                            </div>
                            <div className='HeaderDashboardNav' onClick={(() => { navigate('/userdash/userhistory') })}>
                                <FaAlignJustify />
                                <p>DashBoard</p>
                            </div>
                        </div> :
                        <div className='HeaderOnboarding'>
                            <button className='Header_Bttn1' onClick={() => navigate("alllogin/adminlogin")} >Register Your Hotel</button>
                            <button className='Header_Bttn2' onClick={() => navigate("/alllogin/login")}>Book a room</button>
                        </div>
                }
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

                </div>
                {
                    isLoggedIn ?
                        <div className='HeaderUserNameDesktop'>
                            <FaRegUserCircle onClick={(() => { navigate('/userdash/userhistory') })} />
                            <p>{userData?.data?.data?.fullname}</p>
                        </div> :
                        <div className='Header_Bttn'>
                            <button className='Header_Bttn1' onClick={() => navigate("alllogin/adminlogin")} >Register Your Hotel</button>
                            <button className='Header_Bttn2' onClick={() => navigate("/alllogin/login")}>Book a room</button>
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
