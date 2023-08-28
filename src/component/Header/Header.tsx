const { VITE_TOKEN_USER, VITE_TOKEN } = import.meta.env;
import './Header.css'
import Logo from './RoomLogo-removebg-preview.png'
// import { GiHamburgerMenu } from "react-icons/gi";
// import { MdOutlineMenu } from "react-icons/md";
import { FaTimes, FaRegUserCircle, FaAlignJustify } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAdmin, getUser } from '../APIS/query';
import { useQuery } from '@tanstack/react-query';

const Header: React.FC = () => {
    const navigate = useNavigate()
    const [header, setHeader] = useState<boolean>(false)
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [userRole, setUserRole] = useState<string | null>(null);

    const checkAuthentication = async () => {
        const token1 = localStorage.getItem(VITE_TOKEN_USER);
        const token2 = localStorage.getItem(VITE_TOKEN);
        if (token2) {
            try {
                await getAdmin();
                setIsLoggedIn(true);
                setUserRole('admin');
            } catch (error) {
                setIsLoggedIn(false);
                setUserRole(null);
            }
        } else if (token1) {
            try {
                await getUser();
                setIsLoggedIn(true);
                setUserRole('user');
            } catch (error) {
                setIsLoggedIn(false);
                setUserRole(null);
            }
        } else {
            setIsLoggedIn(false);
            setUserRole(null);
        }
    };
    useEffect(() => {
        checkAuthentication();
    }, []);
    const {data: userData} = useQuery(["getuser"], getUser, {
        enabled: !!localStorage.getItem(VITE_TOKEN_USER),
        refetchOnWindowFocus: false,
        onSuccess: () => {
        },
        onError: () => {

        },
    });
    const { data: adminData } = useQuery(["getadmin"], getAdmin, {
        enabled: !!localStorage.getItem(VITE_TOKEN),
        refetchOnWindowFocus: false,
        onSuccess: () => {

        },
        onError: () => {

        },
    });
    const navigateToDashboard = () => {
        if (userRole === 'admin') {
            navigate('/admindash/dashmain');
        } else if (userRole === 'user') {
            navigate('/userdash/userhistory');
        }
    };

    const HeaderDrop = (
        header && (
            <div className='HeaderMobileDropDown'>
                {
                    isLoggedIn ? (
                        <div className='HeaderUserName'>
                            <div className='HeaderUserNameWrap'>
                                <FaRegUserCircle/>
                                <p>{userRole === 'admin' ? adminData?.data?.data?.name : userData?.data?.data?.fullname}</p>
                            </div>
                            <div className='HeaderDashboardNav' onClick={navigateToDashboard}>
                                <FaAlignJustify />
                                <p>DashBoard</p>
                            </div>
                        </div>
                    ) : (
                        <div className='HeaderOnboarding'>
                            <button className='Header_Bttn1' onClick={() => navigate("alllogin/adminlogin")} >Register Your Hotel</button>
                            <button className='Header_Bttn2' onClick={() => navigate("/alllogin/login")}>Book a room</button>
                        </div>
                    )}
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
                    isLoggedIn ? (
                        <div className='HeaderUserNameDesktop'>
                            <FaRegUserCircle onClick={navigateToDashboard} />
                            <p>{userRole === 'admin' ? adminData?.data?.data?.name: userData?.data?.data?.fullname}</p>
                        </div>
                    ) : (
                        <div className='Header_Bttn'>
                            <button className='Header_Bttn1' onClick={() => navigate("alllogin/adminlogin")} >Register Your Hotel</button>
                            <button className='Header_Bttn2' onClick={() => navigate("/alllogin/login")}>Book a room</button>
                        </div>
                    )}
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

   ;