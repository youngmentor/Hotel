
import { Routes, Route } from 'react-router-dom'
import './AdminDashRight.css'
import DashBoard from './AdminDashboard/DashBoard'
import AllHotels from './AllHotels/AllHotels'

const AdminDashRight: React.FC = () => {


    return (
        <div className='AdminDashRightMain'>
            <div className='AdminDashRightMainWrap'>
                <div className='AdminDashRightHeader'>

                </div>
                <div className='AdminDashRight'>
                   <Routes>
                    <Route path='dashmain' element={<DashBoard/>} />
                    <Route path='allhotels' element={<AllHotels/>}/>
                   </Routes>
                </div>
            </div>
        </div>
    )
}

export default AdminDashRight