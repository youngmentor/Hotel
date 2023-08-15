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
import {  useState } from 'react'
import HomeLogo from './RoomLogo-removebg-preview.png'
import { getAdmin } from '../../../component/APIS/query';
import {  useMutation, useQuery } from '@tanstack/react-query'
import { logOutAdmin,} from '../../../component/APIS/Mutation';
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
    const {  mutate}= useMutation(['logoutAdmin'], logOutAdmin,{
        onSuccess: ()=>{
            // console.log(data?.data.data.id)
            navigate('/')
        }
    });
   
    const {
        data,
    } = useQuery(["getadmin"], getAdmin, {
        enabled: !!localStorage.getItem(VITE_TOKEN),
        refetchOnWindowFocus: false,
        onSuccess: () => {
        },
    });
    const value: any = data?.data?.data

    const handleLogoutClick = async () => {
        mutate(value.id)
    };


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
                        mobile ? <FaTimes onClick={handlMobileChange}/>: <RxHamburgerMenu onClick={handlMobileChange} className="AdminMobileBurger" />
                    }
                    
                </div>
                {mobile && MobileDropDown}
                <div className='AdminDashRightHeaderIcon'>
                    <FaRegUserCircle />
                </div>
            </div>
            <div className='AdminDashRightContent'>
                <Routes>
                    <Route path='/dashmain' element={<DashBoard />} />
                    <Route path='/allhotels' element={<AllHotels value={value}/>} />
                    <Route path='/addhotels' element={<AddHotels value={value} />} />
                    <Route path='/allrooms/:adminId/:hotelId' element={<AllRooms />} />
                    <Route path='/addfacility' element={<AddFacility />} />

                </Routes>
            </div>
            {/* </div> */}
        </div>
    )
}

export default AdminDashRight