
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
const AdminDashRight: React.FC = () => {
    const navigate = useNavigate()
    const [mobile, setMobile] = useState<boolean>(false)

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
                            <p onClick={() => navigate("/admindash/dashmain")}>DashBoard</p>
                        </div>
                        <div className='AdminDashBoardLeftNav_Icon_Div'>
                            <FaHotel />
                            <p onClick={() => navigate("/admindash/allhotels")}>All Hotels</p>
                        </div>
                        <div className='AdminDashBoardLeftNav_Icon_Div'>
                            <MdAddHome />
                            <p onClick={() => navigate("/admindash/addhotels")}>Add Hotels</p>
                        </div>
                        <div className='AdminDashBoardLeftNav_Icon_Div'>
                            <MdOutlineBedroomParent />
                            <p onClick={() => navigate("/admindash/allrooms")}>All Rooms</p>
                        </div>
                        <div className='AdminDashBoardLeftNav_Icon_Div'>
                            <MdAddHome />
                            <p onClick={() => navigate("/admindash/addrooms")}>Add Rooms</p>
                        </div>
                        <div className='AdminDashBoardLeftNav_Icon_Div'>
                            <MdAddHome />
                            <p onClick={() => navigate("/admindash/addfacility")}>Add Facility</p>
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
                    <h3>Welcome Precioous</h3>
                    <div className='AdminDashRightHeaderIcon'>
                        <FaRegUserCircle />
                    </div>
                    <div className='AdminDashRightHeaderIcon2'>
                        {
                            mobile ? <FaRegUserCircle onClick={() => { setMobile(!mobile) }} /> :
                            <FaRegUserCircle onClick={() => { setMobile(!mobile) }} />
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