import { Route,Routes } from "react-router-dom"
import UserProfile from "./UserProfile/UserProfile"
import UserHistory from "./UserHistory/UserHistory"
const UserDashRight: React.FC = () => {


    return (
        <div>
           <div>

           </div>
           <div>
              <Routes>
                <Route path="/userprofile" element={<UserProfile/>}/>
                <Route path="/userhistory" element={<UserHistory/>}/>
              </Routes>
           </div>
        </div>
    )
}

export default UserDashRight