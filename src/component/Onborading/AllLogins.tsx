import { Routes, Route, } from 'react-router-dom'
import Login from './UserLogin/LoginUser'
import AdminLogin from './AdminLogin/AdminLogin'

import './AllLogin.css'
const AllLogins: React.FC = () => {

    return (
        <div className='AllLoginMain'>
          <div className='AllLoginMainWrap'>
          <Routes>
                {/* <Route path='/alogin' element={<ALogin />} /> */}
                <Route path='login' element={<Login />} />
                <Route path='adminlogin' element={<AdminLogin />} />
            </Routes>
          </div>
        </div>
    )
}
export default AllLogins