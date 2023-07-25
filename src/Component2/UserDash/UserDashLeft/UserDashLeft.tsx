import { useNavigate } from "react-router-dom"

const UserDashLeft: React.FC = () => {
const navigate= useNavigate()

    return (
        <div>
            <div>
                <div>
                    <p onClick={() => navigate("/userdash/userprofile")} >User Profile</p>

                </div>
                <div>
                    <p onClick={() => navigate("/userdash/userhistory")}>User History</p>
                    
                </div>
            </div>
        </div>
    )
}

export default UserDashLeft