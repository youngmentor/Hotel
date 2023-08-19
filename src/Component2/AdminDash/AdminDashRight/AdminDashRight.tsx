const { VITE_TOKEN } = import.meta.env;
import { Routes, Route, useNavigate } from 'react-router-dom'
import './AdminDashRight.css'
import DashBoard from './AdminDashboard/DashBoard'
import AllHotels from './AllHotels/AllHotels'
import AddHotels from './AddHotels/AddHotels'
import AllRooms from './AllRooms/AllRooms'
import { RxDashboard, RxHamburgerMenu } from "react-icons/rx";
import { FaHotel, FaTimes } from "react-icons/fa";
import { MdAddHome } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import AddFacility from './AddFacility/AddFacility'
import { useEffect, useState } from 'react'
import HomeLogo from './RoomLogo-removebg-preview.png'
import { getAdmin } from '../../../component/APIS/query';
import { useMutation, useQuery } from '@tanstack/react-query'
import { logOutAdmin, } from '../../../component/APIS/Mutation';
import Swal from 'sweetalert2';
import Update from './Delete/Update_Room';
const AdminDashRight: React.FC = () => {
    const navigate = useNavigate()
    const [mobile, setMobile] = useState<boolean>(false)

    const handlMobileChange = () => {
        setMobile(!mobile)
    }
    const handlecloseMobile = () => {
        setMobile(false)
    }
    const handleNavigate = (path: string) => {
        navigate(path);
        handlecloseMobile();
    };
    const { mutate} = useMutation(['logoutAdmin'], logOutAdmin, {
        onSuccess: () => {
            localStorage.removeItem(VITE_TOKEN)
            setTimeout(() => {
                navigate('/')
            }, 500)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Log out successful',
                showConfirmButton: false,
                timer: 4000
              })
        },
        onError: (error) => {
            console.log(error)
        }
    });
    const {
        data,
    } = useQuery(["getadmin"], getAdmin, {
        enabled: !!localStorage.getItem(VITE_TOKEN),
        refetchOnWindowFocus: false,
        onSuccess: () => {
        },
        onError: () => {
            // console.log(error?.response?.data?.message)
            // please log in!
        },
    });
    const value: any = data?.data?.data
    const handleLogoutClick = async () => {
        mutate(value?.id)
    };
    useEffect(() => {
        // console.log(localStorage.getItem(VITE_TOKEN))
        if(localStorage.getItem(VITE_TOKEN) === null){
            navigate('/alllogin/adminlogin') 
        }
    })

    const MobileDropDown = (
        mobile && (
            <div className='AdminDashLeftMain_Mobile'>
                <div className='AdminDashLeftMainWrap'>
                    <div className='AdminDashboardUserImgDiv'>
                        <img src={HomeLogo} alt='userimg' className='AdminHome_Logo' onClick={() => navigate("/")} />
                        <p className='AdminNameDisplayMobile'>Welcome back {value?.name}! </p>
                        <FaTimes onClick={handlMobileChange} />
                    </div>
                    <div className='AdminDashBoardLeftNav'>
                        <div className='AdminDashBoardLeftNav_Icon_Div'>
                            <RxDashboard />
                            <p onClick={() => handleNavigate('/admindash/dashmain')}>DashBoard</p>
                        </div>
                        <div className='AdminDashBoardLeftNav_Icon_Div'>
                            <FaHotel />
                            <p onClick={() => handleNavigate("/admindash/allhotels")}>All Hotels</p>
                        </div>
                        <div className='AdminDashBoardLeftNav_Icon_Div'>
                            <MdAddHome />
                            <p onClick={() => handleNavigate("/admindash/addhotels")}>Add Hotels</p>
                        </div>
                        <div className='AdminDashBoardLeftNav_Icon_Div'>
                            <MdAddHome />
                            <p onClick={() => handleNavigate("/admindash/addfacility")}>Add Facility</p>
                        </div>
                    </div>
                    <div className='AdminDashBoardLeftNav_Icon_Div'>
                        <BiLogOut />
                        <p onClick={handleLogoutClick}>Log Out</p>
                    </div>
                </div>
            </div>
        )
    )

    return (
        <div className='AdminDashRightMain'>
            {/* <div className='AdminDashRightMainWrap'> */}
            <div className='AdminDashRightHeader'>
                <div className='AdminDashRightHeader_Wrap'>
                    <p className='AdminNameDisplay'>Welcome back {value?.name} ! </p>
                    {
                        mobile ? <FaTimes onClick={handlMobileChange} /> : <RxHamburgerMenu onClick={handlMobileChange} className="AdminMobileBurger" />
                    }

                </div>
                {mobile && MobileDropDown}
                <div className='AdminDashRightHeaderIcon'>
                    <FaRegUserCircle />
                </div>
            </div>
            <div className='AdminDashRightContent'>
                <Routes>
                    <Route path='/dashmain' element={<DashBoard value={value} />} />
                    <Route path='/allhotels' element={<AllHotels value={value} />} />
                    <Route path='/addhotels' element={<AddHotels value={value} />} />
                    <Route path='/allrooms/:adminId/:hotelId' element={<AllRooms />} />
                    <Route path='/addfacility' element={<AddFacility />} />
                    <Route path='/updateroom/:roomId' element={<Update/>}/>
                </Routes>
            </div>
            {/* </div> */}
        </div>
    )
}

export default AdminDashRight