
import { Routes, Route, useNavigate } from 'react-router-dom'
import './AdminDashRight.css'
import DashBoard from './AdminDashboard/DashBoard'
import AllHotels from './AllHotels/AllHotels'
import AddHotels from './AddHotels/AddHotels'
import AllRooms from './AllRooms/AllRooms'
import AddRooms from './AddRooms/AddRooms'
import { RxDashboard } from "react-icons/rx";
import { FaHotel } from "react-icons/fa";
import { MdOutlineBedroomParent } from "react-icons/md";
import { MdAddHome } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import AddFacility from './AddFacility/AddFacility'
import { useState } from 'react'
import HomeLogo from './RoomLogo-removebg-preview.png'
import { useSelector } from 'react-redux'
import { RootState } from '../../../Redux/Store'
const AdminDashRight: React.FC = () => {
    const navigate = useNavigate()
    const [mobile, setMobile] = useState<boolean>(false)
    const {  getAdminName } = useSelector((state: RootState) => state.eBooking.admin);
    const Name = getAdminName?.admin?.name || 'No Admin';
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
    const MobileDropDown = (
        mobile && (
            <div className='AdminDashLeftMain_Mobile'>
                <div className='AdminDashLeftMainWrap'>
                    <div className='AdminDashboardUserImgDiv' onClick={() => navigate("/")}>
                        <img src={HomeLogo} alt='userimg' className='AdminHome_Logo' />
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
                            <MdOutlineBedroomParent />
                            <p onClick={() => handleNavigate("/admindash/allrooms")}>All Rooms</p>
                        </div>
                        <div className='AdminDashBoardLeftNav_Icon_Div'>
                            <MdAddHome />
                            <p onClick={() => handleNavigate("/admindash/addrooms")}>Add Rooms</p>
                        </div>
                        <div className='AdminDashBoardLeftNav_Icon_Div'>
                            <MdAddHome />
                            <p onClick={() => handleNavigate("/admindash/addfacility")}>Add Facility</p>
                        </div>
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
                    <p>welcome {Name}! </p>
                    <div className='AdminDashRightHeaderIcon'>
                        <FaRegUserCircle />
                    </div>
                    <div className='AdminDashRightHeaderIcon2'>
                        {
                            mobile ? <FaRegUserCircle onClick={handlMobileChange} /> :
                                <FaRegUserCircle onClick={handlMobileChange} />
                        }
                        {mobile && MobileDropDown}
                    </div>
                </div>
            </div>
            <div className='AdminDashRightContent'>
                <Routes>
                    <Route path='/dashmain' element={<DashBoard />} />
                    <Route path='/allhotels' element={<AllHotels />} />
                    <Route path='/addhotels' element={<AddHotels />} />
                    <Route path='/allrooms' element={<AllRooms />} />
                    <Route path='/addrooms' element={<AddRooms />} />
                    <Route path='/addfacility' element={<AddFacility />} />

                </Routes>
            </div>
            {/* </div> */}
        </div>
    )
}

export default AdminDashRight