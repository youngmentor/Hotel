import User from './userimg.png'
import './AdminDashLeft.css'
import { useNavigate } from 'react-router-dom'
const AdminDashLeft: React.FC = () => {

const navigate = useNavigate()
    return (
        <div className='AdminDashLeftMain'>
            <div className='AdminDashLeftMainWrap'>
                <div className='AdminDashboardUserImgDiv'>
                    <img src={User} alt='userimg'  className='UserImg'/>
                </div>
                <div className='AdminDashBoardLeftNav'>
                    <p onClick={() => navigate("/admindash/dashmain")}>DashBoard</p>
                    <p onClick={() => navigate("/admindash/allhotels")}>All Hotels</p>
                    <p>Add Hotels</p>
                    <p>All Rooms</p>
                    <p>Add Rooms</p>
                </div>
            </div>
        </div>
    )
}

export default AdminDashLeft