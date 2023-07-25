import { useNavigate } from "react-router-dom"
import User from './userimg.png'
import './UserDashLeft.css'
import { AiOutlineProfile,AiOutlineHistory } from "react-icons/ai";
import HomeLogo from './RoomLogo-removebg-preview.png'
const UserDashLeft: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className="UserDashBoardLeft_Main">
            <div className="User_Home_Logo_Div" onClick={() => navigate("/")} >
                <img src={HomeLogo} className="HomeLogo" />
            </div>
            <div className="User_DashBoardLeft_Wrap">
                <div className='UserDashboardUserImgDiv'>
                    <img src={User} alt='userimg' className='UserImg' />
                    <p>Suliton Olalere</p>
                </div>
                <div className="UserDashBoard_Nav">
                    <div className="UserDashBoardLeftNav_Icon_Div" onClick={() => navigate("/userdash/userprofile")}>
                        <AiOutlineProfile/>
                        <p>Personal Booking</p>

                    </div>
                    <div className="UserDashBoardLeftNav_Icon_Div" onClick={() => navigate("/userdash/userhistory")}>
                        <AiOutlineHistory/>
                        <p>User History</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDashLeft