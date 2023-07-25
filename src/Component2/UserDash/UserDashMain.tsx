
import UserDashLeft from './UserDashLeft/UserDashLeft'
import './UserDashMain.css'
import UserDashRight from './UserDashRight/UserDashRight'
const UserMainDashBoard: React.FC = () => {


    return (
        <div className="UserDashBoardMain">
            <div className='UserDashboard_Main_Wrap'>
                <div className='UserDasboard_Main_Left'>
                    <UserDashLeft />
                </div>
                <div className='UserDashboard_Main_Right'>
                    <UserDashRight />
                </div>
            </div>
        </div>
    )
}

export default UserMainDashBoard