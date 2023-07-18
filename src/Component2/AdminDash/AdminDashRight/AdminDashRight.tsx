
import { Routes, Route } from 'react-router-dom'
import './AdminDashRight.css'
import DashBoard from './AdminDashboard/DashBoard'
import AllHotels from './AllHotels/AllHotels'
import AddHotels from './AddHotels/AddHotels'
import AllRooms from './AllRooms/AllRooms'
import AddRooms from './AddRooms/AddRooms'
import { FaRegUserCircle } from "react-icons/fa";
const AdminDashRight: React.FC = () => {


    return (
        <div className='AdminDashRightMain'>
            {/* <div className='AdminDashRightMainWrap'> */}
            <div className='AdminDashRightHeader'>
                <div className='AdminDashRightHeader_Wrap'>
                    <h3>Welcome Precioous</h3>
                    <div className='AdminDashRightHeaderIcon'>
                        <FaRegUserCircle />
                    </div>
                </div>
            </div>
            <div className='AdminDashRightContent'>
                <Routes>
                    <Route path='/dashmain' element={<DashBoard />} />
                    <Route path='allhotels' element={<AllHotels />} />
                    <Route path='addhotels' element={<AddHotels />} />
                    <Route path='allrooms' element={<AllRooms />} />
                    <Route path='addrooms' element={<AddRooms />} />
                </Routes>
            </div>
            {/* </div> */}
        </div>
    )
}

export default AdminDashRight