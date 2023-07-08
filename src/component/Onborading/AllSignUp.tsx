import { Routes, Route, } from 'react-router-dom'

import './AllSignUp.css'
import AdminSignUp from './AdminSignUp/AdminSignUp'
import SignUpUser from './UserSignUp/SignUpUser'
const AllSignUp: React.FC = () => {

    return (
        <div className='AllSignUpMain'>
          <div className='AllSignUpMainWrap'>
          <Routes>
                <Route path='/adminsignup' element={<AdminSignUp />} />
                <Route path='usersignup' element={<SignUpUser />} />
            </Routes>
          </div>
        </div>
    )
}
export default AllSignUp