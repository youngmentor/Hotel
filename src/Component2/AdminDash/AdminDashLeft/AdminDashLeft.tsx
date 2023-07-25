// import User from './userimg.png'
import './AdminDashLeft.css'
import { useNavigate } from 'react-router-dom'
import { RxDashboard } from "react-icons/rx";
import { FaHotel } from "react-icons/fa";
import { MdOutlineBedroomParent } from "react-icons/md";
import { MdAddHome } from "react-icons/md";
import HomeLogo from './RoomLogo-removebg-preview.png'
const AdminDashLeft: React.FC = () => {

    const navigate = useNavigate()
    return (
        <div className='AdminDashLeftMain'>
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
}

export default AdminDashLeft