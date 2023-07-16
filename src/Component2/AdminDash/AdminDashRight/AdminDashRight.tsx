
import { Routes, Route } from 'react-router-dom'
import './AdminDashRight.css'
import DashBoard from './AdminDashboard/DashBoard'
import AllHotels from './AllHotels/AllHotels'
import AddHotels from './AddHotels/AddHotels'
import AllRooms from './AllRooms/AllRooms'
import AddRooms from './AddRooms/AddRooms'

const AdminDashRight: React.FC = () => {


    return (
        <div className='AdminDashRightMain'>
            {/* <div className='AdminDashRightMainWrap'> */}
                <div className='AdminDashRightHeader'>

                </div>
                <div className='AdminDashRightContent'>
                   <Routes>
                    <Route path='/dashmain' element={<DashBoard/>} />
                    <Route path='allhotels' element={<AllHotels/>}/>
                    <Route path='addhotels' element={<AddHotels/>}/>
                    <Route path='allrooms' element={<AllRooms/>}/>
                    <Route path='addrooms' element={<AddRooms/>}/>
                   </Routes>
                </div>
            {/* </div> */}
        </div>
    )
}

export default AdminDashRight